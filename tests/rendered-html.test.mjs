import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const staticOutput = new URL("../dist/client/", import.meta.url);
const isStatic = await access(new URL("index.html", staticOutput)).then(() => true, () => false);
const worker = isStatic ? null : (await import("../dist/server/index.js")).default;

async function render(path = "/") {
  if (isStatic) {
    const file = new URL(path === "/" ? "index.html" : `${path.slice(1)}.html`, staticOutput);
    try {
      return new Response(await readFile(file, "utf8"), { headers: { "content-type": "text/html" } });
    } catch (error) {
      if (error.code === "ENOENT") return new Response("Not found", { status: 404 });
      throw error;
    }
  }
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

test("the header points to the archive anchor and the About page", async () => {
  const header = homeHtml.match(/<header class="site-header">[\s\S]*?<\/header>/)?.[0];
  assert.ok(header);
  assert.match(header, /<a href="\/#work">Explore<\/a>/);
  assert.match(homeHtml, /<section[^>]*id="work"/);
  assert.match(header, /<a href="\/story\/about-julia">About<\/a>/);
  const about = await render("/story/about-julia");
  assert.equal(about.status, 200);
  assert.match(await about.text(), /<h1>About me<\/h1>/);
});

test("the archive puts incoming and ongoing entries first, then sorts by date", () => {
  const paths = [...homeHtml.matchAll(/<a\b[^>]*class="archive-card"[^>]*href="\/story\/([^"]+)"/g)].map((match) => match[1]);
  assert.deepEqual(new Set(paths.slice(0, 4)), new Set([
    "investment-goldfish", "investment-avior", "investment-marv-labs", "cider-farm",
  ]));
  const before = (first, second) => {
    assert.ok(paths.includes(first) && paths.includes(second));
    assert.ok(paths.indexOf(first) < paths.indexOf(second), `${first} comes before ${second}`);
  };
  before("meta-consumer-hackathon", "sota-community");
  before("sota-community", "mistral-ai-game-jam");
  before("mistral-ai-game-jam", "robotics-hackathon");
  before("the-bridge", "the-drop");
  before("the-drop", "newtone-ai");
  before("newtone-ai", "collabforlove");
  before("collabforlove", "daytonas-stable");
  before("daytonas-stable", "lvmh-concept-store");
  before("lvmh-concept-store", "investment-eigen");
  before("investment-eigen", "investment-uncovr");
});

test("the mosaic shows individual investments as title-only squares", () => {
  const cards = [...homeHtml.matchAll(/<a\b[^>]*class="archive-card"[^>]*>[\s\S]*?<\/a>/g)].map((match) => match[0]);
  assert.ok(cards.length > 0);
  for (const company of ["Eigen", "Uncovr", "Tellia", "Certo", "Lemrock", "Allude", "Alassio", "Synaps", "Goldfish", "Avior", "Marv Labs"]) {
    const matchingCards = cards.filter((card) => card.includes(`<h3>${company}</h3>`));
    assert.equal(matchingCards.length, 1, `${company} has one archive card`);
    assert.match(matchingCards[0], /href="\/story\/investment-/);
  }
  assert.doesNotMatch(homeHtml, /href="\/story\/investment-portfolio"/);
  for (const card of cards) {
    assert.doesNotMatch(card, /<(img|video)\b/);
    assert.match(card, /class="archive-card-title"/);
  }
});

test("unknown stories return a not-found response", async () => {
  const response = await render("/story/does-not-exist");
  assert.equal(response.status, 404);
});

test("both font families are packaged with the site", async () => {
  const assets = [...new Set([...homeHtml.matchAll(/(?:src|href)="(\/(?:media|fonts)\/[^"?]+)"/g)].map((match) => match[1]))];
  assert.ok(assets.some((asset) => asset.includes("karrik-regular.woff2")));
  assert.ok(assets.some((asset) => asset.includes("inter-variable.woff2")));
  for (const asset of assets) await access(new URL(`../public${asset}`, import.meta.url));
});
