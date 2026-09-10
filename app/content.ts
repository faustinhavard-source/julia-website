import { archiveDateOrder } from "./chronology";

export type StoryFilter = "work" | "investments" | "side-quests";

export type MediaItem = {
  label: string;
  note: string;
  tone: string;
  aspect?: "square" | "wide" | "portrait";
  src?: string;
  kind?: "image" | "video";
};

export type StorySection = {
  title: string;
  dek?: string;
  paragraphs?: Array<
    | string
    | {
        segments: Array<string | { label: string; href: string }>;
      }
  >;
  stats?: Array<{ value: string; label: string }>;
  bullets?: string[];
  items?: Array<{ title: string; note?: string }>;
};

export type Story = {
  slug: string;
  title: string;
  year?: string;
  status?: "incoming";
  tag: string;
  filter?: StoryFilter;
  /** Keep unfinished entries out of the public site. Array order breaks date ties. */
  draft?: boolean;
  summary: string;
  intro: string;
  cover: MediaItem;
  hero: MediaItem;
  sections: StorySection[];
  gallery?: MediaItem[];
  links?: Array<{ label: string; href: string }>;
};

export type PortfolioCompany = {
  name: string;
  /** Add only a confirmed investment year. */
  year?: string;
  story?: string;
  status?: "incoming";
  size: "feature" | "quarter" | "third" | "half";
  tone: "peach" | "cobalt" | "sunflower" | "pool" | "red" | "lilac" | "lime" | "blush" | "silver" | "green" | "midnight";
};

export const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "Eigen",
    story:
      "Paul’s awesome. We met in November 2024 in Paris, well before Eigen was Eigen. He is the most obsessive product thinker I know. He is a visionary leader and magnetic personality who’s already taken Silicon Valley by a storm. I’m proud to be one of his first investors, but also good friend.",
    size: "feature",
    tone: "peach",
  },
  { name: "Uncovr", size: "quarter", tone: "cobalt" },
  { name: "Tellia", size: "quarter", tone: "sunflower" },
  { name: "Certo", size: "quarter", tone: "pool" },
  { name: "Lemrock", size: "quarter", tone: "red" },
  { name: "Allude", size: "third", tone: "lilac" },
  { name: "Alassio", size: "third", tone: "lime" },
  { name: "Synaps", size: "third", tone: "blush" },
  { name: "Goldfish", status: "incoming", size: "quarter", tone: "silver" },
  { name: "Avior", status: "incoming", size: "quarter", tone: "green" },
  { name: "Marv Labs", status: "incoming", size: "half", tone: "midnight" },
];

const storyLibrary: Story[] = [
  {
    slug: "about-julia",
    title: "About me",
    year: "Now",
    tag: "about",
    summary: "Kuala Lumpur, Hong Kong, France, fashion, founders, and finding life’s work.",
    intro: "A life split between creative industries, technology, and helping people find their life’s work.",
    cover: {
      label: "FAMILY / PLACES / JULIA",
      note: "portrait or childhood collage",
      tone: "apricot",
      aspect: "square",
    },
    hero: {
      label: "KUALA LUMPUR → HONG KONG → FRANCE → SAN FRANCISCO",
      note: "hero portrait, family archive, or moving-map video",
      tone: "apricot",
      aspect: "wide",
    },
    sections: [
      {
        title: "About me",
        paragraphs: [
          "I grew up between South East Asia (Kuala Lumpur and Hong Kong) and France, with an Irish mother and a French father. I have two brothers, who are incredibly talented and creative—Louis in games, Etienne in design. My childhood dream was to be a news producer and work in media. I never tried.",
          "I started my career in fashion, working on shoe product design at Louis Vuitton back when Virgil was around, then as a womenswear buyer for Le Bon Marché—perhaps the only Uniqlo-dressed buyer at the Jacquemus and Burberry shows. It was fun to be around creatives all the time.",
          "During the pandemic, stores were closed and I was on my couch. I launched a social-commerce account to help hospitals raise funds. I realized then that selling beautiful garments was probably not what I should be doing with my life. I’ve always liked to build things: products and communities. Since then, I’ve built a bunch of really random things as side hustles or company attempts.",
          "Life for me is a collection of dopamine-inducing stints, surrounded by great people around the world. I’m forever stuck between wanting to slip back into creative industries and being obsessed with the pace and culture of technology.",
          "I’ve recently come to the realization that helping humans find their life’s work and follow their dreams is what brings me the most joy.",
          "I’m currently doing so by backing founders at The Bridge.",
        ],
      },
      {
        title: "Things I like to listen to, read and follow",
        items: [
          {
            title: "Fleurons",
            note: "A podcast from my uber-talented sister-in-law Clémence Lepic.",
          },
        ],
      },
    ],
  },
  {
    slug: "the-bridge",
    title: "The Bridge",
    year: "2025",
    tag: "work",
    filter: "work",
    summary: "Fifty technologists, eight weeks, one roof, and the search for a life’s work.",
    intro:
      "A founder residency in San Francisco backing exceptional individuals before they have a co-founder or an idea.",
    cover: {
      src: "/media/the-bridge/team.webp",
      label: "The Bridge team by the San Francisco Bay",
      note: "residency portrait / house life",
      tone: "sunflower",
    },
    hero: {
      label: "THE BRIDGE / SAN FRANCISCO",
      note: "full-cohort image or residency film",
      tone: "sunflower",
      aspect: "wide",
    },
    sections: [
      {
        title: "Day minus one",
        paragraphs: [
          {
            segments: [
              "In October 2025, we publicly announced the launch of our ",
              {
                label: "Bridge founder residency is San Francisco",
                href: "https://www.youtube.com/watch?v=Q19UT4u91wY&list=PLaDjE1VTVKMQg9mQiMY_qGoEdXcxiGyZL&index=4",
              },
              ".",
            ],
          },
          "The Bridge is an 8 week residency program uniting 50 individual technologists looking for a co-founder, and looking to start a massive company. They all live under one roof, receive advisory by some of the worlds’ best entrepreneurs and investors, and receive funding. We are building a no-distraction community of founders and friends from all over the world.",
        ],
      },
      {
        title: "Built from both sides of the table",
        paragraphs: [
          "I’m building this with Anastasia Wolter and an incredible team at EF. Having done EF and YC as founders, we had a really good understanding of what early stage incubators, accelerators, hacker houses (however you want to call it) could bring to founders. Both good and bad. We also had a good understanding of what the 0>1 venture path looked like, having personally raised venture capital on both our companies, in Europe and in the US. The Bridge residency is a work in progress product iteration of what we believe the best accelerator like experience should look like for founders. It’s funded and backed by Entrepreneurs First.",
        ],
      },
      {
        title: "The original bridge",
        paragraphs: [
          {
            segments: [
              "We didn’t actually come up with the idea for the Bridge. Maxence, Estelle, Donia and Pauline ran the very first iteration of the Bridge product, in Buckberg Castle in Germany, it was awesome. ",
              { label: "Check it out", href: "https://www.youtube.com/watch?v=JkfiJY2HYX4" },
              " here.",
            ],
          },
          {
            segments: [
              "It was such a good product that we moved it to SF and are taking it to the next level. ",
              { label: "Finding the residency", href: "https://www.youtube.com/watch?v=I9zSQPz105c" },
              " was fun! We are running 4 cohorts a year: Winter, Spring, Summer and Fall, backing 200+ individuals at day -1, before they have a co-founder or an idea.",
            ],
          },
        ],
      },
    ],
    gallery: [
      { label: "THE HOUSE", note: "residency spaces", tone: "green", aspect: "wide" },
      { label: "COHORT 01", note: "founders + friends", tone: "apricot", aspect: "square" },
      { label: "DAY −1", note: "working / dinners / demos", tone: "cobalt", aspect: "portrait" },
    ],
    links: [{ label: "Visit The Bridge", href: "https://www.join-thebridge.com/" }],
  },
  {
    slug: "collabforlove",
    title: "Collabforlove",
    year: "2020",
    tag: "work",
    filter: "work",
    summary: "Flash auctions, improbable collectibles, and €500k+ raised for NGOs.",
    intro:
      "A social-commerce Instagram account built with Eole Peyron during Covid to raise money for the Paris Hospital Foundation, powered entirely by community and hustle.",
    cover: {
      src: "/media/collabforlove/julia-eole-standing.webp",
      label: "Julia and Eole, cofounders of Collabforlove",
      note: "campaign montage / auction still",
      tone: "red",
    },
    hero: {
      label: "COLLABFORLOVE / THE AUCTION FEED",
      note: "Instagram grid, campaign poster, or launch video",
      tone: "red",
      aspect: "wide",
    },
    sections: [
      {
        title: "The idea",
        paragraphs: [
          "We flash-auctioned collectibles and lifestyle experiences to support the Paris Hospital Foundation during Covid. There was no paid acquisition, just an Instagram account, an urgent cause and a lot of messages sent to strangers.",
          "In under two months, 25,000 people joined the community. Over a year, the project raised more than €500,000 for multiple NGOs and appeared in 30+ media outlets. We were nominated for the 2020 Women of Influence award for contributing to the national effort.",
        ],
        stats: [
          { value: "€500k+", label: "raised for NGOs" },
          { value: "25k", label: "followers in <2 months" },
          { value: "$0", label: "ad spend" },
          { value: "30+", label: "media features" },
        ],
      },
      {
        title: "Some ridiculous things we auctioned",
        bullets: [
          "Zinedine Zidane’s signed football boots, sold for $4k",
          "Lucas Pouille’s tennis racket, Tony Parker’s NBA hat and Vincent Clerc’s rugby boots",
          "Caps from Loïck Peyron’s three America’s Cups",
          "VIP tickets from 47TER and a collector LP from Bob Sinclar",
          "A cooking experience with Juan Arbelaez and a Crazy Horse Paris VIP experience",
          "Work by JR and an original piece created for Collabforlove by Soledad",
        ],
      },
    ],
    gallery: [
      { label: "ZIDANE’S BOOTS", note: "WhatsApp image / auction result", tone: "lime", aspect: "portrait" },
      { label: "SPORTS LOTS", note: "signed collectibles montage", tone: "pool", aspect: "square" },
      { label: "MUSIC LOTS", note: "video clips / Bob Sinclar LP", tone: "lilac", aspect: "wide", kind: "video" },
      { label: "ART FOR LOVE", note: "JR + Soledad pieces", tone: "sunflower", aspect: "square" },
      { label: "BEHIND THE SCENES", note: "fun photos / community archive", tone: "blush", aspect: "wide" },
    ],
    links: [
      { label: "Collabforlove on Instagram", href: "https://www.instagram.com/collabforlove/" },
      { label: "Les Echos feature", href: "https://serielimitee.lesechos.fr/art-de-vivre/philanthropie/collab-for-love-1773823" },
      { label: "Milk Magazine feature", href: "https://www.milkmagazine.net/article/suivre-collabforlove/" },
      { label: "Crazy Horse collaboration", href: "https://www.lecrazyhorseparis.com/collab-for-love-octobre-rose/" },
      { label: "Collabforlove on LinkedIn", href: "https://lnkd.in/p/evbXSqbY" },
    ],
  },
  {
    slug: "investment-portfolio",
    title: "Investment portfolio",
    year: "A growing list",
    tag: "investing",
    filter: "investments",
    summary: "Early bets on obsessive people, with the personal story where there is one.",
    intro:
      "A mosaic of early bets. Hover, focus or tap a company to read the little story behind it.",
    cover: {
      label: "Early beliefs.",
      note: "founder portraits / company marks",
      tone: "peach",
    },
    hero: {
      label: "PEOPLE BEFORE PITCH DECKS",
      note: "portfolio mark wall or founder contact sheet",
      tone: "peach",
      aspect: "wide",
    },
    sections: [
      {
        title: "Eigen",
        paragraphs: [
          "Paul’s awesome. We met in November 2024 in Paris, well before Eigen was Eigen. He is the most obsessive product thinker I know. He is a visionary leader and magnetic personality who’s already taken Silicon Valley by a storm. I’m proud to be one of his first investors, but also a good friend.",
        ],
      },
      {
        title: "The portfolio",
        items: [
          { title: "Eigen", note: "one of the earliest believers" },
          { title: "Uncovr" },
          { title: "Tellia" },
          { title: "Certo" },
          { title: "Lemrock" },
          { title: "Allude" },
          { title: "Alassio" },
          { title: "Synaps" },
          { title: "Goldfish", note: "incoming" },
          { title: "Avior", note: "incoming" },
          { title: "Marv Labs", note: "incoming" },
        ],
      },
    ],
  },
  {
    slug: "the-drop",
    title: "The Drop",
    year: "2023",
    tag: "company",
    filter: "work",
    summary: "A video-first social-commerce app that was fun, fast, and hard to monetize.",
    intro:
      "Built for small business owners, launched in the US, and co-founded with my forever co-founder Anastasia Wolter.",
    cover: {
      src: "/media/the-drop/julia-anastasia-flight.jpg",
      label: "Julia and Anastasia, cofounders of The Drop",
      note: "mobile product screens / seller video",
      tone: "pool",
    },
    hero: {
      label: "THE DROP / MOBILE COMMERCE",
      note: "vertical product demo montage",
      tone: "pool",
      aspect: "wide",
    },
    sections: [
      {
        title: "A shop that felt like a feed",
        paragraphs: [
          "We built a video-first social-commerce app for small business owners and launched it in the US. In two months, the platform generated €30k GMV.",
          "It was genuinely cool and fun. It was also extremely difficult to make money from. Both things can be true.",
        ],
        stats: [
          { value: "€30k", label: "GMV in two months" },
          { value: "US", label: "launch market" },
          { value: "video", label: "commerce, feed-first" },
        ],
      },
      {
        title: "The forever co-founder",
        paragraphs: [
          "I co-founded The Drop with Anastasia Wolter. The company did not last forever; the partnership did. We are still moving mountains together today.",
        ],
      },
    ],
    gallery: [
      { label: "BUYER FLOW", note: "WhatsApp product demo", tone: "cobalt", aspect: "portrait", kind: "video" },
      { label: "SELLER FLOW", note: "vertical upload demo", tone: "sunflower", aspect: "portrait", kind: "video" },
      { label: "LAUNCH", note: "US market / first orders", tone: "red", aspect: "square" },
    ],
  },
  {
    slug: "newtone-ai",
    title: "Newtone AI",
    year: "2022",
    tag: "work",
    filter: "work",
    summary: "Brand-consistent e-commerce content, built just before ChatGPT arrived.",
    intro:
      "An LLM-powered content platform for digital-native brands and retailers, co-founded at Entrepreneurs First.",
    cover: {
      label: "Newtone AI",
      note: "product UI / campaign copy",
      tone: "lilac",
    },
    hero: {
      label: "NEWTONE AI / PRODUCT",
      note: "product demo or brand-content collage",
      tone: "lilac",
      aspect: "wide",
    },
    sections: [
      {
        title: "Before the category had a name",
        paragraphs: [
          "We built software for digital-native brands, retailers and e-commerce teams to scale online content while preserving tone of voice and brand consistency. This was just before ChatGPT made generative AI a dinner-table topic.",
          "I met Henri de Bouteiller, our CPO, and Julien Sevenot Piltant, our CTO, at Entrepreneurs First. I was co-founder and CEO from day zero through our seed round.",
        ],
        stats: [
          { value: "$1.5M", label: "seed round" },
          { value: "Day 0", label: "built at EF" },
          { value: "LLM", label: "before the hype cycle" },
        ],
      },
      {
        title: "Stepping out",
        paragraphs: [
          "I stepped out in July 2023. Henri became CEO and has grown Newtone into a solid business since then, working with some of the best retailers and surviving the SaaSpocalypse with a genuinely cool product.",
        ],
      },
    ],
    gallery: [
      { label: "PRODUCT DEMO", note: "workflow video", tone: "midnight", aspect: "wide", kind: "video" },
      { label: "EARLY PITCH", note: "deck / founding team", tone: "peach", aspect: "square" },
    ],
    links: [{ label: "Visit Newtone", href: "https://www.newtone.ai/" }],
  },
  {
    slug: "lvmh-concept-store",
    title: "Tech-enabled concept store for LVMH",
    year: "2018",
    tag: "work",
    filter: "work",
    summary: "A confidential, tech-enabled retail concept dreamed up at 21.",
    intro: "Three really delusional intrapreneurs spent close to 15 months imagining what the store after Colette could become.",
    cover: {
      label: "LVMH",
      note: "concept render / store plan",
      tone: "cobalt",
    },
    hero: {
      label: "DARE LVMH / CONCEPT 2018",
      note: "architectural render or pitch-deck spread",
      tone: "cobalt",
      aspect: "wide",
    },
    sections: [
      {
        title: "The project",
        paragraphs: [
          "Most of this project was confidential, so I can’t share much. But we were a team of three really delusional individuals—Jonathan Noel, Anne-Sophie Laugier and me—and worked for close to 15 months as intrapreneurs on a new store concept for the LVMH group.",
          "This was around the time the best-ever store in Paris, Colette, closed down. We came up with the idea of a tech-enabled experimental store at the DARE LVMH hackathon in 2018. I was 21 at the time.",
          "We hired architects and designed several store plans, sourced incredible technologies to transform retail as we knew it, and explored working with KUKA on robotic arms for stock management, connected vending machines and weather capsules. Our mentors were Ian Rogers and Philippe Colin.",
          "Then Covid hit. Retail was under enormous pressure, funding for the project was cut, and that was the end of that ride.",
        ],
      },
    ],
  },
  {
    slug: "rare-cacti-marketplace",
    title: "Rare Cacti Marketplace",
    year: "2022",
    tag: "side quest",
    filter: "side-quests",
    summary: "An online marketplace for rare-cacti owners—and a domain worth being proud of.",
    intro: "Launched an online marketplace for rare-cacti owners. I’m the proud owner of cacthusiasts.com.",
    cover: {
      label: "Cacthusiasts",
      note: "marketplace screenshot or rare-cacti photography",
      tone: "lime",
    },
    hero: {
      label: "RARE CACTI MARKETPLACE",
      note: "media to be selected",
      tone: "lime",
      aspect: "wide",
    },
    sections: [
      {
        title: "Rare Cacti Marketplace",
        paragraphs: [
          "Launched an online marketplace for rare-cacti owners. I’m the proud owner of cacthusiasts.com.",
        ],
      },
    ],
    links: [{ label: "Visit cacthusiasts.com", href: "https://cacthusiasts.com/" }],
  },
  {
    slug: "cider-farm",
    title: "Cider Farm",
    year: "Ongoing",
    tag: "side quest",
    filter: "side-quests",
    summary: "A Normandy cider and Calvados farm, three tonnes of spirits, and an unfinished American plan.",
    intro: "A family cider and Calvados farm in Normandy, and a business plan that keeps coming back.",
    cover: {
      label: "Cider farm",
      note: "farm, orchard, bottles or family archive",
      tone: "sunflower",
    },
    hero: {
      label: "CIDER & CALVADOS",
      note: "media to be selected",
      tone: "sunflower",
      aspect: "wide",
    },
    sections: [
      {
        title: "Cider Farm",
        paragraphs: [
          "My family business is a cider and Calvados farm in Normandy. Over the years, I’ve built multiple business plans around relaunching a cider brand for export to America. We have three tonnes of spirits to sell—hit me up if you want to start that business with me.",
        ],
      },
    ],
  },
  {
    slug: "daytonas-stable",
    title: "Horseracing",
    year: "2019",
    tag: "side quest",
    filter: "side-quests",
    summary: "Daytona’s Stable: an absurd and thrilling investment with twenty university friends.",
    intro: "Daytona’s Stable might be ten times more fun than venture investing—and perhaps ten times less profitable.",
    cover: {
      label: "Daytona’s stable",
      note: "race-day or stable media",
      tone: "cobalt",
    },
    hero: {
      label: "HORSERACING",
      note: "media to be selected",
      tone: "cobalt",
      aspect: "wide",
    },
    sections: [
      {
        title: "Daytona’s Stable",
        paragraphs: [
          "I’ve invested in horseracing with 20 of my best friends from university. I know nothing about horseracing. It’s the most absurd yet thrilling way to invest—10× more fun than venture investing and perhaps 10× less profitable.",
        ],
      },
    ],
  },
  {
    slug: "meta-consumer-hackathon",
    title: "Meta Consumer Hackathon",
    year: "September 2025",
    tag: "side quest",
    filter: "side-quests",
    summary: "Meta Consumer Hackathon, September 2025.",
    intro: "Meta Consumer Hackathon, September 2025.",
    cover: {
      src: "/media/random-things/meta-team-original.png",
      label: "The Meta Consumer Hackathon team",
      note: "event media already available",
      tone: "pool",
    },
    hero: {
      label: "META CONSUMER HACKATHON",
      note: "media arrangement to be decided",
      tone: "pool",
      aspect: "wide",
    },
    sections: [],
  },
  {
    slug: "mistral-ai-game-jam",
    title: "Mistral AI Game Jam",
    year: "April 2025",
    tag: "side quest",
    filter: "side-quests",
    summary: "Mistral AI Game Jam, April 2025.",
    intro: "Mistral AI Game Jam, April 2025.",
    cover: {
      src: "/media/random-things/mistral-julia-anastasia-original.webp",
      label: "Julia and Anastasia at the Mistral AI Game Jam",
      note: "event media already available",
      tone: "red",
    },
    hero: {
      label: "MISTRAL AI GAME JAM",
      note: "media arrangement to be decided",
      tone: "red",
      aspect: "wide",
    },
    sections: [],
    links: [{ label: "Watch the Mistral AI Game Jam", href: "https://www.youtube.com/watch?v=NhPDVAcLzD4" }],
  },
  {
    slug: "robotics-hackathon",
    title: "Europe’s biggest and first Robotics Hackathon",
    year: "April 2025",
    tag: "side quest",
    filter: "side-quests",
    summary: "Europe’s biggest and first Robotics Hackathon, April 2025.",
    intro: "Europe’s biggest and first Robotics Hackathon, April 2025.",
    cover: {
      label: "Robotics hackathon",
      note: "event media to be selected",
      tone: "silver",
    },
    hero: {
      label: "ROBOTICS HACKATHON",
      note: "media arrangement to be decided",
      tone: "silver",
      aspect: "wide",
    },
    sections: [],
    links: [{ label: "Watch the Robotics Hackathon", href: "https://www.youtube.com/watch?v=-oA0K_rTBKs" }],
  },
  {
    slug: "sota-community",
    title: "SOTA Community",
    year: "May 2025",
    tag: "side quest",
    filter: "side-quests",
    summary: "A technical community and online webinar series, built with friends.",
    intro: "A tech-focused community and a series of technical webinars online.",
    cover: {
      label: "SOTA",
      note: "identity or webinar media",
      tone: "midnight",
    },
    hero: {
      label: "SOTA COMMUNITY",
      note: "media arrangement to be decided",
      tone: "midnight",
      aspect: "wide",
    },
    sections: [
      {
        title: "SOTA Community",
        paragraphs: [
          "Co-founded a tech-focused community with Anastasia Wolter, Kevin Kuipers and Willy Braun, and launched a series of technical webinars online.",
        ],
      },
    ],
    links: [{ label: "Watch the SOTA webinar series", href: "https://watch.getcontrast.io/sota" }],
  },
  {
    slug: "corporate-life",
    draft: true,
    title: "Corporate life",
    year: "Before the rabbit hole",
    tag: "work",
    filter: "work",
    summary: "Four years learning how to buy, sell, distribute, and negotiate at scale.",
    intro:
      "Before startups, there was fashion: first buying inside LVMH, then leading French sales for a Dutch fashion-tech scale-up.",
    cover: {
      label: "LVMH / OTRIUM",
      note: "runway, retail, or team image",
      tone: "ink",
    },
    hero: {
      label: "THE UNIQLO-DRESSED BUYER AT THE FASHION SHOW",
      note: "corporate-era photo or press still",
      tone: "ink",
      aspect: "wide",
    },
    sections: [
      {
        title: "Le Bon Marché / LVMH",
        dek: "Two years as a womenswear buyer.",
        paragraphs: [
          "I managed a $22M-turnover sector and a portfolio of 20 brands, including Burberry, Moncler and Max Mara. It was equal parts product instinct, commercial negotiation and operational detail.",
        ],
        stats: [
          { value: "$22M", label: "sector turnover" },
          { value: "20", label: "brands managed" },
          { value: "2 yrs", label: "inside LVMH" },
        ],
      },
      {
        title: "Otrium",
        dek: "Two years as Head of Sales, France.",
        paragraphs: [
          "I helped launch and grow the French business for the Dutch fashion-tech scale-up, bringing in $10M GMV in year one.",
        ],
        stats: [
          { value: "$10M", label: "GMV in year one" },
          { value: "France", label: "market launched" },
          { value: "0→1", label: "commercial build" },
        ],
      },
    ],
    gallery: [
      { label: "BUYING", note: "showroom / market week", tone: "silver" },
      { label: "SALES", note: "Otrium team / launch", tone: "cobalt" },
    ],
  },
  {
    slug: "random-things",
    draft: true,
    title: "Random things",
    year: "2024–2025",
    tag: "side quests",
    filter: "side-quests",
    summary: "Art shows, game jams, robots, hackathons, and a technical community.",
    intro:
      "Not companies and not exactly hobbies, just a collection of rooms I was lucky enough to help make more interesting.",
    cover: {
      label: "SIDE QUESTS",
      note: "event contact sheet",
      tone: "lime",
    },
    hero: {
      label: "THE SIDE-QUEST ARCHIVE",
      note: "five-event contact sheet",
      tone: "lime",
      aspect: "wide",
    },
    sections: [
      {
        title: "Alys Paola’s first Paris exhibition",
        dek: "July 2024",
        paragraphs: ["Co-organized LA artist Alys Paola’s first exhibition in Paris with Anastasia <3"],
      },
      {
        title: "A very hackathon-heavy year",
        items: [
          { title: "Meta Consumer Hackathon", note: "September 2025: a camera roll full of prototypes and people." },
          { title: "Mistral AI Game Jam", note: "April 2025: games, models and barely enough sleep." },
          { title: "Europe’s first and biggest Robotics Hackathon", note: "April 2025: hardware everywhere." },
        ],
      },
      {
        title: "SOTA",
        dek: "May 2025",
        paragraphs: [
          "Co-founded a tech-focused community with Anastasia Wolter, Kevin Kuipers and Willy Braun, then launched a series of technical webinars online.",
        ],
      },
    ],
    gallery: [
      { label: "ALYS PAOLA", note: "exhibition images", tone: "blush", aspect: "portrait" },
      { label: "META", note: "hackathon gallery", tone: "cobalt", aspect: "square" },
      { label: "MISTRAL", note: "game jam photos", tone: "red", aspect: "wide" },
      { label: "ROBOTS", note: "hackathon video", tone: "silver", aspect: "wide", kind: "video" },
      { label: "SOTA", note: "webinars / community", tone: "midnight", aspect: "square" },
    ],
    links: [
      { label: "Watch the Mistral Game Jam", href: "https://www.youtube.com/watch?v=NhPDVAcLzD4" },
      { label: "Watch the Robotics Hackathon", href: "https://www.youtube.com/watch?v=-oA0K_rTBKs" },
      { label: "Watch SOTA", href: "https://watch.getcontrast.io/sota" },
    ],
  },
  {
    slug: "weird-things",
    draft: true,
    title: "Things I inexplicably own / do",
    year: "Ongoing",
    tag: "weird",
    filter: "side-quests",
    summary: "Rare cacti, plane crashes, three tonnes of spirits, and one racehorse syndicate.",
    intro:
      "The page most likely to explain me, or make me substantially harder to explain.",
    cover: {
      label: "CACTI / PLANES / CIDER / HORSES",
      note: "a deliberately chaotic collage",
      tone: "green",
    },
    hero: {
      label: "SOMEHOW, ALSO MY LIFE",
      note: "four-part collage or spinning object video",
      tone: "green",
      aspect: "wide",
    },
    sections: [
      {
        title: "The four horsemen of my free time",
        items: [
          { title: "🌵 Rare cacti", note: "I launched an online marketplace for rare-cactus owners and am the proud owner of cacthusiasts.com." },
          { title: "✈ Plane crashes", note: "I’m obsessed. I have read everything I can find about the most spectacular cases. MH370 is still the craziest one out there." },
          { title: "🍎 Cider and Calvados", note: "My family runs a farm in Normandy. I have written several business plans for a cider brand bound for America. We have three tonnes of spirits to sell. Hit me up if you want to start that business for me." },
          { title: "♞ Daytona’s Stable", note: "I invested in horse racing with 20 of my best friends from university. I know nothing about horse racing. It is perhaps 10× more thrilling and 10× less profitable than venture investing." },
        ],
      },
    ],
    gallery: [
      { label: "CACTHUSIASTS.COM", note: "marketplace screenshot", tone: "lime", aspect: "square" },
      { label: "NORMANDY", note: "orchard / bottles / barrels", tone: "apricot", aspect: "portrait" },
      { label: "DAYTONA’S STABLE", note: "race day with 20 friends", tone: "cobalt", aspect: "wide" },
      { label: "MH370 NOTES", note: "reading pile / diagrams", tone: "midnight", aspect: "square" },
    ],
    links: [{ label: "A domain I’m proud to own", href: "https://cacthusiasts.com/" }],
  },
  {
    slug: "reading-listening",
    draft: true,
    title: "Reading / listening",
    year: "An open shelf",
    tag: "list",
    summary: "The books, essays, podcasts and rabbit holes currently shaping the thinking.",
    intro:
      "A deliberately unfinished shelf. The structure is ready; Julia’s current recommendations can drop in as notes, covers, links or voice memos.",
    cover: {
      label: "CURRENTLY CONSUMING",
      note: "book spines / headphones / marginalia",
      tone: "silver",
    },
    hero: {
      label: "THE OPEN SHELF",
      note: "reading stack or annotated desk",
      tone: "silver",
      aspect: "wide",
    },
    sections: [
      {
        title: "On the nightstand",
        items: [
          { title: "Book title", note: "add a one-line reason it stayed with you" },
          { title: "Essay / newsletter", note: "add link + favourite idea" },
          { title: "Podcast episode", note: "add link + the bit you replayed" },
        ],
      },
      {
        title: "How this page works",
        paragraphs: [
          "Each recommendation can be swapped in without changing the layout. A short, subjective note will always be more interesting here than a polished review.",
        ],
      },
    ],
    gallery: [
      { label: "BOOK COVERS", note: "3–6 current reads", tone: "cobalt", aspect: "wide" },
      { label: "AUDIO", note: "podcast / playlist art", tone: "red", aspect: "square" },
    ],
  },
  {
    slug: "lets-chat",
    draft: true,
    title: "Let’s chat",
    year: "Open inbox",
    tag: "contact",
    summary: "Hiring, fundraising, GTM, sales, introductions, or one of the stranger topics.",
    intro:
      "I invest through The Bridge and Entrepreneurs First, and I also help founders ad hoc when the right introduction or honest conversation can unlock something.",
    cover: {
      label: "IF I CAN BE USEFUL",
      note: "portrait / handwritten invitation",
      tone: "midnight",
    },
    hero: {
      label: "COME SAY HELLO",
      note: "add Julia’s preferred portrait or short hello video",
      tone: "midnight",
      aspect: "wide",
    },
    sections: [
      {
        title: "A few things I can help with",
        bullets: [
          "Hiring exceptional people",
          "Finding the right investors",
          "Fundraising strategy and narrative",
          "Building GTM and sales from zero",
          "Connecting founders to people who can help",
        ],
      },
      {
        title: "Hit me up",
        paragraphs: [
          "I’m always happy to chat. Add Julia’s email and social links in the site header when they’re ready; the contact surface is already designed for them.",
        ],
      },
    ],
  },
];

// Each portfolio company gets its own page and archive card from the same record.
const investmentStories: Story[] = portfolioCompanies.map((company) => ({
  slug: `investment-${company.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  title: company.name,
  year: company.year,
  status: company.status,
  tag: "investment",
  filter: "investments",
  summary: `${company.name} — ${company.status === "incoming" ? "incoming in" : "part of"} Julia Denoly’s investment portfolio.`,
  intro: company.story ?? (company.status === "incoming" ? "Incoming." : "Part of my investment portfolio. A little story will live here soon."),
  cover: { label: company.name, note: "", tone: company.tone },
  hero: { label: company.name, note: "", tone: company.tone },
  sections: [],
}));

// Add a story above to create its page and archive card automatically.
// Keep the original portfolio URL available, while expanding its companies in the archive.
export const stories = storyLibrary.filter((story) => !story.draft).flatMap((story) =>
  story.slug === "investment-portfolio" ? [story, ...investmentStories] : [story],
);
export const archiveStories = stories
  .filter((story) => story.filter && story.slug !== "investment-portfolio")
  .sort((a, b) => archiveDateOrder(b.year) - archiveDateOrder(a.year));
export const bioStory = stories.find((story) => story.slug === "about-julia")!;

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}
