# Julia’s website

Julia’s personal archive: work, investments and side quests. The `dev` branch contains the September 2026 redesign, with a photo mosaic, Karrik headings and Inter body text. Both fonts are served locally, with their licences and credits in `public/fonts/`.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local address printed by the development server.

## Add a box

All content lives in `app/content.ts`. Add an object to `storyLibrary`. The array order is the home-page order. No separate ordering list or route registration is needed.

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
- Leave out `cover.src` to show a simple typographic placeholder. Set `label` to the words you want in the placeholder.
- Set `draft: true` to keep an entry out of the site while it is unfinished.
- Omit `filter` for a standalone page such as About, without a home-page box.
- New entries automatically appear under the relevant filter and get a `/story/<slug>` page.
- Use `gallery` for additional photos and `links` for external references.

`ArchiveCard.tsx` handles every home-page box. The same `MediaFrame` component handles the media, so adding photos does not require changes to the layout. The home page sends only card information to the interactive grid, keeping full project stories on the server.

## Design and validation

`app/globals.css` contains the two fonts, colour variables, shared components and responsive layouts. The single shared `MediaDialog` uses a native dialog for photo/video viewing, including Escape, keyboard containment and focus restoration. Existing video clips do not yet include caption tracks.

```bash
npm test
npm run lint
npm run typecheck
```

The render tests check the home page, every linked story, missing routes and local media/font assets. Browser interaction and visual QA are separate from these checks.

## Hosting and domain

The existing site is https://julia-internet-archive.aish-hitchikersway.chatgpt.site.

`.openai/hosting.json` references the existing Sites project. Keep that ID. The current GitHub account (`faustinhavard-source`) has read-only access to `caliperce/julia-website`; the local `dev` branch has not been pushed. The existing Sites project is also unavailable to the current account.

Before publishing or connecting Julia’s domain:

1. Get collaborator write access to the GitHub repository and editor access to the existing Sites project from its owner.
2. Confirm Julia’s exact domain and the service managing its DNS.
3. Register the domain against the existing hosting project and use the exact verification/routing records returned by that host.
4. Add only those records, preserve mail and other DNS records, then verify the domain and HTTPS.

The September redesign has not changed the live site or any DNS records.

## Visual references

- https://www.kyliechang.space/work — image-led project mosaic and personal tone.
- https://benji.org/ — quiet hierarchy and restrained personal-site presentation.
- https://x.com/benjitaylor/status/2096656821591413161 — the personal-sites discussion; https://jrands.com was among the sites shared in its replies.

`WEBSITE_FEEDBACK.md` preserves Julia’s earlier content brief. The September 9 design request supersedes its earlier font and styling choices.
