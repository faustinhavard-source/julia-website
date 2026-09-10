# Julia’s website

Julia’s personal archive: work, investments and side quests. The `review/julia-v1` branch contains the September 2026 redesign, with a pastel title-only mosaic, Karrik headings and Inter body text. Each card caption shows its title, category and date when provided. Both fonts are served locally, with their licences and credits in `public/fonts/`. Existing photos remain available inside story pages.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local address printed by the development server.

## Add a box

All content lives in `app/content.ts`. Add an object to `storyLibrary`. The mosaic puts entries with `status: "incoming"` or `year: "Ongoing"` first, then sorts the rest from newest to oldest, including months when supplied. Other undated entries appear last, and entries with the same priority and date retain their array order. No separate ordering list or route registration is needed.

```ts
{
  slug: "my-new-project",
  title: "My new project",
  year: "2026",
  tag: "work",
  filter: "work", // work | investments | side-quests
  summary: "A short description for search engines.",
  intro: "The opening paragraph on the project page.",
  cover: {
    src: "/media/my-new-project/cover.webp",
    label: "Describe what the photo shows",
    note: "Optional photo caption",
    tone: "silver",
    aspect: "square", // square | wide | portrait
  },
  hero: {
    src: "/media/my-new-project/cover.webp",
    label: "Describe what the photo shows",
    note: "Optional photo caption",
    tone: "silver",
  },
  sections: [
    { title: "The story", paragraphs: ["The story behind the project."] },
  ],
}
```

- Put photos in `public/media/<slug>/`; use their `/media/...` paths in the entry.
- Home-page boxes currently show the entry title on a pastel background selected by `cover.tone`. The cover photo is retained for the story page and for a future photo-based home page.
- Set `draft: true` to keep an entry out of the site while it is unfinished.
- Omit `filter` for a standalone page such as About, without a home-page box.
- New entries automatically appear under the relevant filter and get a `/story/<slug>` page.
- Use `gallery` for additional photos and `links` for external references.

`ArchiveCard.tsx` handles every home-page box. `MediaFrame` handles media inside story pages. The home page sends only card information to the interactive grid, keeping full project stories on the server.

Internal navigation uses standard links so the statically hosted pages and the Explore section anchor work without a server-side navigation endpoint. Keep native links for the header, project cards and return links.

## Add an investment

Add the company to `portfolioCompanies` in `app/content.ts`, including its `name`, `tone` and optional personal `story`. Its individual card, Investments filter entry and `/story/investment-<company>` page are generated automatically. Add `year: "2025"` only when the investment date is confirmed; omit it otherwise. Keep `status: "incoming"` for entries that are not yet completed investments. Status is displayed separately from the date. No dates or investment details are invented when none are available.

The older `/story/investment-portfolio` overview remains available at its original address but no longer takes up a home-page box.

## Design and validation

`app/globals.css` contains the two fonts, colour variables, shared components and responsive layouts. The single shared `MediaDialog` uses a native dialog for photo/video viewing, including Escape, keyboard containment and focus restoration. Existing video clips do not yet include caption tracks.

```bash
npm test
npm run lint
npm run typecheck
```

The render tests check the home page, every linked story, missing routes and local media/font assets. Browser interaction and visual QA are separate from these checks.

For the deployed static version, run `npm run build:preview` followed by `node --test tests/rendered-html.test.mjs`. The same tests then verify the exported pages, header destinations and chronological order.

## Hosting and domain

This review copy belongs to Faustin. Its source is maintained in `faustinhavard-source/julia-website`, on the default branch `review/julia-v1`. Publishing this copy does not require access to Aïch’s hosting account.

Public review: https://julia-website-review.vercel.app. The Vercel project is `julia-website-review` in Faustin’s personal workspace, `faustinhavard-5877s-projects`.

`vercel.json` prepares a static deployment from this repository. `npm run build:preview` exports every story, its React navigation data, and its media into `dist/client`. The normal build remains available for Cloudflare Workers. No application database or server secrets are required.

Deploy a validated update with `vercel deploy --prod --project julia-website-review --scope faustinhavard-5877s-projects`. GitHub pushes currently save the source; deployment is a separate step. `.vercelignore` excludes local environment files, credentials and development output.

The Vercel production domain is used for social metadata during hosted builds. `NEXT_PUBLIC_SITE_URL` can override it when Julia’s custom domain is connected.

An independent Sites project is also registered in `.openai/hosting.json`, but the initial source upload failed on large media files; no version of this copy has been published there. Preserve its ID if resuming Sites hosting.

To connect Julia’s domain, confirm its exact name and DNS provider, register it with this hosting project, and apply only the verification and routing records returned by the host. Preserve existing email and other DNS records. No DNS records have been changed.

## Visual references

- https://www.kyliechang.space/work — image-led project mosaic and personal tone.
- https://benji.org/ — quiet hierarchy and restrained personal-site presentation.
- https://x.com/benjitaylor/status/2096656821591413161 — the personal-sites discussion; https://jrands.com was among the sites shared in its replies.

`WEBSITE_FEEDBACK.md` preserves Julia’s earlier content brief. The September 9 design request supersedes its earlier font and styling choices.
