# Julia's Website — Revision Brief

**Feedback received:** August 25, 2026  
**Document status:** Working source of truth for the next website revision  
**Implementation status:** Structural revision in progress; final photo/video arrangement deferred

This brief consolidates Julia's feedback into confirmed decisions, final content, required media, unresolved questions, and an implementation checklist. It should be updated as assets and decisions arrive so the next build can be completed in one coherent pass.

## 1. Revision goals

- Give the site a stronger, more recognizable personality without changing the overall layout Julia already likes.
- Simplify the home page into a consistent mosaic in which one box represents one project, company, or side quest.
- Reduce the navigation to four filters: **All**, **Work**, **Investments**, and **Side quests**.
- Move the biography and reading/listening material out of the project-filter system.
- Replace orange accents with yellow.
- Explore typography close to the visual language of The Bridge.
- Replace the Collabforlove Polaroid treatment with a cleaner media presentation.
- Remove labels, numbering, and interface copy that make the page feel busy or over-explained.

## 2. Confirmed design and structure decisions

### Color and branding

- Replace the current orange accent throughout the site with **yellow**, Julia's favorite color.
- Add stronger branding elements and more color so the site has more personality.
- Keep the current overall layout as the starting point.
- A later visual-branding pass with Faustin may happen after the content and layout are settled.

### Typography

- Use **Geometric 231 Heavy** for bold display typography.
- Use **Platypi** for editorial copy and characterful supporting text.
- The supplied **Geometric 231 Heavy Regular** font file is installed locally in the website and used for display typography.

### Primary filters

Keep exactly these filters, in this order:

1. **All**
2. **Work**
3. **Investments**
4. **Side quests**

Remove the current **Projects**, **Investing**, **Random**, **Weird**, and **Reading** filters.

### Content grouping

- Merge the current **Random things** and **Weird things** material into **Side quests**.
- Do not include **About me** or **Reading / listening** as mosaic filters.
- Find a separate home for the biography and reading/listening material. The header's **About me** link is the likely entry point for the biography.
- Treat each individual project or activity as its own mosaic box. Do not group several unrelated ideas into one box.
- Keep Investments as one portfolio entry in the home mosaic unless Julia confirms that each company should become a separate home-page box.

### Mosaic-card format

Use the same basic presentation for every card:

- date or status;
- project/company title;
- media, where available.

Remove nonessential card chrome, including:

- numeric indexes such as `00`, `01`, and `02`;
- category/tag labels when the active filter already provides that context;
- placeholder labels such as `FAMILY / PLACES / JULIA`;
- summaries when they make the mosaic visually busy;
- `open page ↗` and similar explanatory interface copy.

**Working interpretation:** the home mosaic should be visually led and minimal; longer descriptions belong inside project detail views. This should be confirmed against the supplied Kylie Chang reference before the build.

### Media presentation

- Do not continue with the Collabforlove Polaroid style.
- The stamp treatment was explored and then rejected; do not use stamp borders or perforated edges.
- Keep the current media presentation clean, straight, and rectangular until a different arrangement is approved.
- Media containers must follow each asset's proportions instead of stretching to equal card heights. Captions should sit directly beneath the image, and wide artwork such as the Soledad illustration should use a wide frame without empty filler space.
- The map reference remains optional inspiration and is not part of the approved implementation.

## 3. Target information architecture

| Filter | Cards shown |
| --- | --- |
| **All** | Every Work, Investment, and Side quest card in one mosaic |
| **Work** | LVMH concept store, Collabforlove, Newtone AI, The Drop, The Bridge |
| **Investments** | One Investment portfolio card; the company-level presentation remains inside that entry for now |
| **Side quests** | Rare Cacti Marketplace, Cider Farm, Horseracing, each hackathon, SOTA community |

The current standalone **Corporate life**, **Alys Paola exhibition**, **Reading / listening**, and **Let's chat** cards are not part of the supplied target list. Do not keep them in the new mosaic unless Julia explicitly asks to retain them.

## 4. Header content

### Keep

**Currently:** building [The Bridge](https://www.join-thebridge.com/) @ Entrepreneurs First

**About me**

**Talk to me about:** early days of founding, California & the Mediterranean, my love for brands, logos and random consumer products, South East Asia and Ireland.

**Investment portfolio:** Eigen, Uncovr, Tellia, Certo, Lemrock, Allude, Alassio, Synaps, Goldfish, Avior, Marv Labs

**Socials:** [X](https://x.com/juliadenoly) and [LinkedIn](https://www.linkedin.com/in/julia-denoly/)

Present the social links as a clean, right-aligned vertical list, with LinkedIn above X. Do not add a circular star badge above the links. The supplied reference also contains a clock, “last squeezed” note, Instagram, email, and Beli; those elements are not part of Julia's current header.

### Remove or simplify

- Remove the current **Previously** line unless it is deliberately reused inside the About content.
- Remove the long category framing: `WORK / PROJECTS / ODDITIES` and `Everything else`.
- Remove page-count language such as `10 pages / one life so far` and `00 pages showing` unless a much quieter version is intentionally retained.
- Use one simple section heading, **WORK**, with the four filters beneath or beside it, following the Kylie Chang reference.
- Replace the placeholder social links with Julia's confirmed X and LinkedIn profiles. Instagram and email are not currently included.

## 5. About me content

The About content should live outside the four mosaic filters, most likely behind the **About me** header link. The interaction is not yet decided; see Open Questions.

### Draft copy

I grew up between South East Asia (Kuala Lumpur and Hong Kong) and France, with an Irish mother and a French father. I have two brothers, who are incredibly talented and creative (Louis in games, Etienne in design). My childhood dream was to be a news producer and work in media. I never tried.

I started my career in fashion, working on shoe product design at Louis Vuitton back when Virgil was around, then as a womenswear buyer for Le Bon Marché—perhaps the only Uniqlo-dressed buyer at the Jacquemus and Burberry shows. It was fun to be around creatives all the time.

During the pandemic, stores were closed and I was on my couch. I launched a social-commerce account to help hospitals raise funds. I realized then that selling beautiful garments was probably not what I should be doing with my life. I've always liked to build things: products and communities. Since then, I've built a bunch of really random things as side hustles or company attempts.

Life for me is a collection of dopamine-inducing stints, surrounded by great people around the world. I'm forever stuck between wanting to slip back into creative industries and being obsessed with the pace and culture of technology.

I've recently come to the realization that helping humans find their life's work and follow their dreams is what brings me the most joy.

I'm currently doing so by backing founders at The Bridge.

### Reading and listening seed

- **Fleurons**, a podcast from my uber-talented sister-in-law Clémence Lepic.

**Copy note:** the source text has been lightly proofread above for spelling and grammar while preserving Julia's voice. Final copy approval is still required.

## 6. Work cards and detail content

### 2018 — Tech-enabled concept store for LVMH

Most of this project was confidential, so I can't share much. But we were a team of three really delusional individuals—Jonathan Noel, Anne-Sophie Laugier, and me—and worked for close to 15 months as intrapreneurs on a new store concept for the LVMH group.

This was around the time the best-ever store in Paris, Colette, closed down. We came up with the idea of a tech-enabled experimental store at the DARE LVMH hackathon in 2018. I was 21 at the time.

We hired architects and designed several store plans, sourced incredible technologies to transform retail as we knew it, and explored working with KUKA on robotic arms for stock management, connected vending machines, and weather capsules. Our mentors were Ian Rogers and Philippe Colin.

Then Covid hit. Retail was under enormous pressure, funding for the project was cut, and that was the end of that ride.

**Media needed:** confidential-safe concept renders, store plans, DARE LVMH material, technology references, or team photos.

### 2020 — Collabforlove

Built a social-commerce Instagram account with my cofounder Eole Peyron, flash-auctioning collectibles and lifestyle products to raise funds for the Paris Hospital Foundation (AP-HP) during Covid.

We grew a community completely organically—$0 spent on ads—to 25,000 followers in less than two months. We raised more than €500,000 for multiple NGOs over one year, were featured in 30+ media outlets, and were nominated for the 2020 Women of Influence award for our contribution to the national effort.

#### Best and most random collectibles we sold through pure hustle

**Sports**

- Zinedine Zidane's signed football boots, sold for $4,000.
- Lucas Pouille's tennis racket.
- Tony Parker's NBA hat.
- Vincent Clerc's rugby boots.
- Caps from Loïck Peyron's three America's Cups.

**Music**

- VIP concert tickets from 47TER.
- A collector LP from Bob Sinclar.

**Experiences**

- A cooking experience with Juan Arbelaez.
- A Crazy Horse Paris VIP experience.

**Art**

- *Giants, Miguel, Casa Amarela, Morro da Providência, Rio de Janeiro, Brazil*, JR, 2018.
- An original artwork for Collabforlove by French designer Soledad.

#### Links

- [Collabforlove on Instagram](https://www.instagram.com/collabforlove/)
- [Les Echos — Collab for Love](https://serielimitee.lesechos.fr/art-de-vivre/philanthropie/collab-for-love-1773823)
- [Milk Magazine — Suivre Collabforlove](https://www.milkmagazine.net/article/suivre-collabforlove/)
- [Crazy Horse Paris — Collab for Love Octobre Rose](https://www.lecrazyhorseparis.com/collab-for-love-octobre-rose/)
- [LinkedIn short link supplied in feedback](https://lnkd.in/p/evbXSqbY)

**Media requested:** sports photos and video, 47TER and Bob Sinclar videos, JR and Soledad artwork, founder/behind-the-scenes photos, press coverage, and the supplied Gemini explanation screenshot if it adds useful context.

### 2022 — Newtone AI

Built an LLM-powered software product for digital-native brands, retailers, and e-commerce players to scale their online content needs while preserving their tone of voice and brand consistency.

This was just before ChatGPT. I met my cofounders Henri de Bouteiller, then CPO, and Julien Sevenot-Piltant, CTO, at Entrepreneurs First. I was cofounder and CEO from day zero through our $1.5M seed round, and stepped out in July 2023.

Henri stepped up as CEO and has grown Newtone into a solid business since then, working with some of the best retailers and surviving the SaaSpocalypse era with a really cool product.

[Visit Newtone AI](https://www.newtone.ai/)

**Media needed:** product screenshots, brand-content examples, team/founder material, or launch/fundraising coverage.

### 2023 — The Drop

Built a video-first social-commerce app for small-business owners. We launched in the US and generated €30,000 in GMV in two months.

It was really cool and fun, but impossible to make money from. I co-founded this one with Anastasia Wolter, who became my forever cofounder and with whom I'm still moving mountains today.

**Media requested:** three supplied product/demo videos. A founder photo is already present in the project and may also be used if it fits the new layout.

### 2025 — The Bridge

[Visit The Bridge](https://www.join-thebridge.com/)

In October 2025, we publicly announced the launch of The Bridge founder residency in San Francisco.

The Bridge is an eight-week residency program uniting 50 individual technologists who are looking for a cofounder and want to start a massive company. They all live under one roof, receive advice from some of the world's best entrepreneurs and investors, and receive funding. We are building a no-distraction community of founders and friends from all over the world.

I'm building this with Anastasia Wolter and an incredible team at EF. Having done EF and YC as founders, we had a strong understanding of what early-stage incubators, accelerators, and hacker houses—however you want to describe them—can bring to founders, both good and bad.

We also understood what the 0-to-1 venture path looked like, having personally raised venture capital for both our companies in Europe and the US. The Bridge residency is a work-in-progress product iteration of what we believe the best accelerator-like experience should be for founders. It is funded and backed by Entrepreneurs First.

We didn't actually come up with the idea for The Bridge. Maxence, Estelle, Donia, and Pauline ran the very first iteration of the product at Bückeburg Castle in Germany, and it was awesome. **A link to this first iteration still needs to be supplied.**

It was such a good product that we moved it to San Francisco and are taking it to the next level. We run four cohorts a year—Winter, Spring, Summer, and Fall—backing more than 200 individuals at day minus one, before they have a cofounder or an idea.

**Media needed:** residency, cohort, house, team, founder, and event media. One current team image is already present in the project.

## 7. Side quest cards and detail content

Each item below should be an individual mosaic card rather than being bundled into one “random” page.

### 2022 — Rare Cacti Marketplace

Launched an online marketplace for rare-cacti owners. I'm the proud owner of [cacthusiasts.com](https://cacthusiasts.com/).

**Media needed:** marketplace screenshot, cacti photography, logo, or domain screenshot.

### Ongoing — Cider Farm

My family business is a cider and Calvados farm in Normandy. Over the years, I've built multiple business plans around relaunching a cider brand for export to America. We have three tonnes of spirits to sell—hit me up if you want to start that business with me.

**Media needed:** farm, orchard, bottles, labels, family archive, or distillery imagery.

### 2019 — Horseracing / Daytona's Stable

I've invested in horseracing with 20 of my best friends from university. I know nothing about horseracing. It's the most absurd yet thrilling way to invest—10× more fun than venture investing and perhaps 10× less profitable.

**Media needed:** horse, race-day, stable, ownership group, or ticket imagery.

### September 2025 — Meta Consumer Hackathon

**Media supplied in the original feedback:**

- `1732536592491.jpg`
- `1732536592317.jpg`
- `1732536592350.jpg`
- `1732536592429.jpg`
- `1732536592558.jpg`

### April 2025 — Mistral AI Game Jam

[Watch the YouTube video](https://www.youtube.com/watch?v=NhPDVAcLzD4)

**Media supplied in the original feedback:**

- `1738058477746.jpg`
- `1737727213801.jpg`
- `1738058477701.jpg`
- `1738058477835.jpg`
- `1738058477860.jpg`

### April 2025 — Europe's biggest and first Robotics Hackathon

[Watch the YouTube video](https://www.youtube.com/watch?v=-oA0K_rTBKs)

**Media needed:** photos, event graphics, project/demo imagery, or screenshots from the video.

### May 2025 — SOTA Community

Co-founded a tech-focused community with Anastasia Wolter, Kevin Kuipers, and Willy Braun, and launched a series of technical webinars online.

[Watch the SOTA webinar series](https://watch.getcontrast.io/sota)

**Media needed:** SOTA identity, webinar thumbnails, speaker screenshots, or community/event imagery.

## 8. Investment cards

Keep these companies in the Investment portfolio entry. Whether they should later become separate home-page boxes is still an open question:

1. Eigen
2. Uncovr
3. Tellia
4. Certo
5. Lemrock
6. Allude
7. Alassio
8. Synaps
9. Goldfish — incoming
10. Avior — incoming
11. Marv Labs — incoming

### Eigen detail copy

Paul's awesome. We met in November 2024 in Paris, well before Eigen was Eigen. He is the most obsessive product thinker I know: a visionary leader and magnetic personality who has already taken Silicon Valley by storm. I'm proud to be one of his first investors and also a good friend.

No descriptive copy was supplied for Uncovr, Tellia, Certo, Lemrock, Allude, Alassio, or Synaps. Until more is provided, their cards should stay concise and should not use invented descriptions.

## 9. Current media already in the project

The following assets are already available and should not need to be uploaded again unless Julia wants higher-resolution originals.

### Collabforlove

- Zidane boots image
- Lucas Pouille racket image
- Vincent Clerc boots image
- Tony Parker video and poster
- Bob Sinclar video and poster
- 47TER video and poster
- JR artwork image
- Soledad artwork image
- Two Julia + Eole photos
- Madame Figaro press image

### The Drop

- Three product/demo videos and their posters
- Julia + Anastasia founder photo

### Hackathons and other side quests

- Five Meta Consumer Hackathon images
- Four Mistral AI Game Jam images
- One Alys Paola image from the old Random things page; this is not currently part of the target content list

### The Bridge

- One team image

## 10. Media still to collect

High-priority asset gaps:

- The exact screenshots used as design references in the August 25 feedback, including the Kylie Chang examples.
- The Bridge font names/files or a visual/type reference.
- LVMH concept-store media that is safe to publish.
- Newtone AI product or founder media.
- The Bridge residency/cohort/house media.
- Cacti, cider-farm, and horseracing media.
- Robotics Hackathon media.
- The fifth Mistral Game Jam image, if the four current files do not already cover it under a renamed filename.
- Any higher-resolution originals for existing compressed images.
- Instagram and email URLs only if those channels are later added; X and LinkedIn are confirmed.

When new files are supplied, record for each one:

- which card/project it belongs to;
- the people shown, from left to right;
- approximate date and location;
- preferred caption, if any;
- whether it may be cropped;
- whether it is cleared for public use;
- for video, whether sound is important and whether a poster image is available.

## 11. Open questions and inconsistencies

These should be resolved before or during implementation. They should not be silently guessed if they materially change the design.

1. **About me behavior:** should the header link open a dedicated page, an expandable panel, a modal, or a section further down the home page?
2. **Reading/listening location:** should it live inside About me, on a small separate page, or as a simple external link list?
3. **Card destinations:** the current implementation uses detail pages; confirm whether any smaller items should later expand in place instead.
4. **Home heading:** the feedback says to show only `WORK`, but the filters also include Investments and Side quests. Should `WORK` stay fixed, or should the heading change with the active filter?
5. **Yellow:** the exact shade and supporting palette have not been chosen.
6. **Typography:** Geometric 231 Heavy and Platypi are approved and installed.
7. **Hackathon date label:** the source groups Hackathons under `2022–2023`, but all listed events took place in 2025. This brief uses the individual 2025 dates.
8. **Tech communities date label:** the source labels the parent item `2022`, while the SOTA entry says May 2025. This brief uses May 2025.
9. **The first Bridge iteration:** the phrase “Check it out here” has no destination URL.
10. **Legacy content:** confirm that Corporate life, Alys Paola, and Let's chat should disappear from the mosaic rather than be reassigned.
11. **Copy treatment:** confirm that the light proofreading in this brief is acceptable, or whether all original spellings and phrasing should remain verbatim.
12. **Footer and social links:** X and LinkedIn are confirmed in the header; the footer treatment is still unspecified.

## 12. Implementation checklist

### Content and data

- [ ] Replace the old six-filter model with All / Work / Investments / Side quests.
- [ ] Split grouped Random/Weird content into one record per side quest.
- [ ] Keep one Investment portfolio card in the home mosaic unless Julia explicitly requests company-level home cards.
- [ ] Move About me out of the filter system.
- [ ] Move Reading/listening out of the filter system.
- [ ] Remove or reassign legacy cards not present in the target list.
- [ ] Apply approved copy corrections.
- [ ] Add all confirmed external links.

### Home page and cards

- [ ] Remove `WORK / PROJECTS / ODDITIES`, `Everything else`, card indexes, tags, summaries, and `open page ↗` where directed.
- [ ] Give every Work, Investment, and Side quest item the same base card grammar.
- [ ] Keep the All view coherent when content from all three categories is mixed.
- [ ] Confirm ordering within each filter and within All.
- [ ] Confirm card click/expand behavior.

### Visual system

- [ ] Replace orange with an approved yellow across shared color tokens and interaction states.
- [x] Apply Geometric 231 Heavy and Platypi.
- [ ] Add stronger, repeatable branding elements.
- [ ] Remove the Polaroid styling and use a neutral temporary grid.
- [ ] Decide the final photo/video treatment in a separate media-design pass.
- [ ] Check the system on desktop, tablet, and mobile.
- [ ] Ensure yellow text/background combinations remain readable and accessible.

### Media

- [ ] Inventory each newly supplied image/video and map it to a card.
- [ ] Reuse existing assets where appropriate.
- [ ] Create consistent video posters where missing.
- [ ] Add useful alternative text and concise captions.
- [ ] Optimize large media without visibly degrading it.

### Final quality check

- [ ] Exactly four filters appear, with the requested labels.
- [ ] All displays every project/company/side quest once.
- [ ] No card shows the old numeric index or unnecessary explanatory labels.
- [ ] About me remains easy to find without becoming a fifth filter.
- [ ] The reading/listening seed remains accessible somewhere outside the filters.
- [ ] All supplied links work.
- [ ] The site has no remaining orange accents unless intentionally approved.
- [ ] The Collabforlove media no longer uses the Polaroid visual treatment.
- [ ] Layout and media interactions work with keyboard, touch, and reduced-motion settings.

## 13. Suggested build order

1. Resolve the open structural questions and approve the cleaned copy.
2. Restructure the content model and the four filters.
3. Simplify the header and mosaic cards.
4. Apply the yellow-led visual system and approved typography.
5. Review the structural pass on desktop and mobile.
6. Receive and label the remaining image/video assets.
7. Decide and build the final media treatment.
8. Complete one final content and link check, then publish.
