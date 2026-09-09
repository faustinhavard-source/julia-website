import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

const { default: worker } = await import("../dist/server/index.js");

async function render(path = "/") {
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

const home = await render();
const homeHtml = await home.text();

test("the archive is rendered with its projects and four filters", () => {
  assert.equal(home.status, 200);
  assert.match(home.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(homeHtml, /<title>Julia Denoly/);
  assert.match(homeHtml, /Building things\./);
  assert.match(homeHtml, /class="archive-card"/);
  for (const label of ["All", "Work", "Investments", "Side quests"]) {
    assert.match(homeHtml, new RegExp(`<button[^>]*>${label}</button>`));
  }
  assert.doesNotMatch(homeHtml, /Your site is taking shape|Building your site|codex-preview/);
  assert.doesNotMatch(homeHtml, /href="\/story\/(corporate-life|random-things|weird-things|reading-listening|lets-chat)"/);
});

test("every story linked from the archive has a working page", async (t) => {
  const paths = [...new Set([...homeHtml.matchAll(/href="(\/story\/[^"#?]+)"/g)].map((match) => match[1]))];
  assert.ok(paths.length >= 14, "the existing story collection must stay reachable");
  for (const path of paths) {
    await t.test(path, async () => {
      const response = await render(path);
      const html = await response.text();
      assert.equal(response.status, 200);
      assert.match(html, /<h1[^>]*>[^<]+<\/h1>/);
      assert.match(html, /id="main-content"/);
      assert.doesNotMatch(html, /Internal Server Error/);
    });
  }
});

test("unknown stories return a not-found response", async () => {
  const response = await render("/story/does-not-exist");
  assert.equal(response.status, 404);
});

test("local photos and both font families are packaged with the site", async () => {
  const assets = [...new Set([...homeHtml.matchAll(/(?:src|href)="(\/(?:media|fonts)\/[^"?]+)"/g)].map((match) => match[1]))];
  assert.ok(assets.some((asset) => asset.includes("karrik-regular.woff2")));
  assert.ok(assets.some((asset) => asset.includes("inter-variable.woff2")));
  for (const asset of assets) await access(new URL(`../public${asset}`, import.meta.url));
});
