export type StoryFilter = "work" | "projects" | "investing" | "random" | "weird";

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
  paragraphs?: string[];
  stats?: Array<{ value: string; label: string }>;
  bullets?: string[];
  items?: Array<{ title: string; note?: string }>;
};

export type Story = {
  slug: string;
  title: string;
  year: string;
  tag: string;
  filter?: StoryFilter;
  index: string;
  summary: string;
  intro: string;
  cover: MediaItem;
  hero: MediaItem;
  sections: StorySection[];
  gallery?: MediaItem[];
  links?: Array<{ label: string; href: string }>;
};

export const filters: Array<{ label: string; value: "all" | StoryFilter }> = [
  { label: "all", value: "all" },
  { label: "work", value: "work" },
  { label: "projects", value: "projects" },
  { label: "investing", value: "investing" },
  { label: "random", value: "random" },
  { label: "weird", value: "weird" },
];

export const stories: Story[] = [
  {
    slug: "about-julia",
    title: "About Julia",
    year: "Kuala Lumpur → SF",
    tag: "story",
    index: "00",
    summary: "Fashion, founders, family, and a collection of dopamine-inducing stints.",
    intro:
      "I grew up between South East Asia and France, then somehow found my way from fashion to technology. I am still happily stuck between the two.",
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
        title: "A childhood in several places",
        paragraphs: [
          "I grew up between Kuala Lumpur, Hong Kong and France, with an Irish mother and a French father. I have two brothers who are wildly talented and creative: Louis in games and Etienne in design.",
          "My childhood dream was to be a news producer and work in media. I never tried.",
        ],
      },
      {
        title: "Then somehow fashion happened",
        paragraphs: [
          "I started my career working on shoe product design at Louis Vuitton, back when Virgil was around, then became a womenswear buyer for Le Bon Marché — perhaps the only Uniqlo-dressed buyer at the Jacquemus and Burberry shows.",
          "It was fun to be around creative people all the time. It also taught me how to sell things, distribute them and negotiate very large contracts.",
        ],
      },
      {
        title: "Covid, couch, existential crisis",
        paragraphs: [
          "During the pandemic, stores closed and I was on my couch. I launched a social-commerce project to help hospitals raise funds. I realized that selling beautiful garments was probably not what I should be doing with my life.",
          "I have always liked building things — products, communities, and occasionally very random side hustles or company attempts.",
        ],
      },
      {
        title: "Now",
        paragraphs: [
          "Life, for me, is a collection of dopamine-inducing stints surrounded by great people around the world. I am forever tempted to slip back into the creative industries, and equally obsessed with the pace and culture of technology.",
          "Helping people find their life’s work and follow their dreams is what brings me the most joy. I’m currently doing that by backing founders at The Bridge.",
        ],
      },
    ],
    gallery: [
      { label: "CHILDHOOD", note: "family archive", tone: "blush", aspect: "portrait" },
      { label: "FASHION YEARS", note: "LVMH / shows / Le Bon Marché", tone: "ink", aspect: "square" },
      { label: "FOUNDERS", note: "people + places", tone: "sunflower", aspect: "wide" },
    ],
  },
  {
    slug: "corporate-life",
    title: "Corporate life",
    year: "Before the rabbit hole",
    tag: "work",
    filter: "work",
    index: "01",
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
    slug: "lvmh-concept-store",
    title: "LVMH Concept Store",
    year: "2018–2020",
    tag: "project",
    filter: "projects",
    index: "02",
    summary: "A confidential, tech-enabled retail concept dreamed up at 21.",
    intro:
      "Three slightly delusional intrapreneurs spent 15 months imagining what the store after Colette could become.",
    cover: {
      label: "RETAIL, REWIRED",
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
        title: "The idea",
        paragraphs: [
          "Most of this project was confidential, so I can’t share much. Jonathan Noel, Anne-Sophie Laugier and I came up with a tech-enabled experimental store at the DARE LVMH hackathon in 2018. I was 21.",
          "This was around the time Paris’s best store, Colette, had closed. We wanted to imagine a new kind of physical retail: useful, experimental and alive.",
        ],
      },
      {
        title: "Fifteen months of very real make-believe",
        paragraphs: [
          "We hired architects, designed several store plans and sourced technologies that could transform retail: KUKA robotic arms for stock management, connected vending machines and weather capsules.",
          "Ian Rogers and Philippe Colin mentored us. Then Covid hit, retail came under enormous pressure, the funding disappeared, and that was the end of the ride 🙂",
        ],
        stats: [
          { value: "3", label: "intrapreneurs" },
          { value: "15 mo", label: "building the concept" },
          { value: "21", label: "Julia’s age at kickoff" },
        ],
      },
    ],
    gallery: [
      { label: "STORE PLAN 01", note: "architectural plans", tone: "silver", aspect: "wide" },
      { label: "ROBOTICS", note: "KUKA stock concept", tone: "red", aspect: "portrait" },
      { label: "PITCH ARCHIVE", note: "confidential-safe extracts", tone: "pool", aspect: "square" },
    ],
  },
  {
    slug: "collabforlove",
    title: "Collabforlove",
    year: "2020–2021",
    tag: "project",
    filter: "projects",
    index: "03",
    summary: "Flash auctions, improbable collectibles, and €500k+ raised for NGOs.",
    intro:
      "A social-commerce Instagram account built with Eole Peyron during Covid to raise money for the Paris Hospital Foundation — powered entirely by community and hustle.",
    cover: {
      label: "BID WITH LOVE",
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
          "We flash-auctioned collectibles and lifestyle experiences to support the Paris Hospital Foundation during Covid. There was no paid acquisition — just an Instagram account, an urgent cause and a lot of messages sent to strangers.",
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
          "Zinedine Zidane’s signed football boots — sold for $4k",
          "Lucas Pouille’s tennis racket, Tony Parker’s NBA hat and Vincent Clerc’s rugby boots",
          "Caps from Loïck Peyron’s three America’s Cups",
          "VIP tickets from 47TER and a collector LP from Bob Sinclar",
          "A cooking experience with Juan Arbelaez and a Crazy Horse Paris VIP experience",
          "Work by JR and an original piece created for Collabforlove by Soledad",
        ],
      },
      {
        title: "What stayed with me",
        paragraphs: [
          "The project made building feel immediate and human. It was the moment I understood that products and communities could move people — and that I wanted to spend much more of my life making them.",
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
    ],
  },
  {
    slug: "newtone-ai",
    title: "Newtone AI",
    year: "2022–2023",
    tag: "company",
    filter: "projects",
    index: "04",
    summary: "Brand-consistent e-commerce content, built just before ChatGPT arrived.",
    intro:
      "An LLM-powered content platform for digital-native brands and retailers, co-founded at Entrepreneurs First.",
    cover: {
      label: "NEW TONE, SAME VOICE",
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
          "I stepped out in July 2023. Henri became CEO and has grown Newtone into a solid business since then — working with some of the best retailers and surviving the SaaSpocalypse with a genuinely cool product.",
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
    slug: "the-drop",
    title: "The Drop",
    year: "2023",
    tag: "company",
    filter: "projects",
    index: "05",
    summary: "A video-first social-commerce app that was fun, fast, and hard to monetize.",
    intro:
      "Built for small business owners, launched in the US, and co-founded with my forever co-founder Anastasia Wolter.",
    cover: {
      label: "WATCH IT. WANT IT.",
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
    slug: "the-bridge",
    title: "The Bridge",
    year: "2025 → now",
    tag: "currently",
    filter: "projects",
    index: "06",
    summary: "Fifty technologists, eight weeks, one roof, and the search for a life’s work.",
    intro:
      "A founder residency in San Francisco backing exceptional individuals before they have a co-founder or an idea.",
    cover: {
      label: "50 PEOPLE / ONE ROOF",
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
          "The Bridge is an eight-week residency for 50 individual technologists looking for a co-founder and hoping to start a massive company. They live under one roof, receive advice from some of the world’s best entrepreneurs and investors, and receive funding.",
          "We are building a no-distraction community of founders and friends from all over the world.",
        ],
        stats: [
          { value: "50", label: "technologists per cohort" },
          { value: "8 wks", label: "living and building" },
          { value: "4×", label: "cohorts per year" },
          { value: "200+", label: "people backed at day −1" },
        ],
      },
      {
        title: "Built from both sides of the table",
        paragraphs: [
          "I’m building The Bridge with Anastasia Wolter and an incredible team at Entrepreneurs First. Having done EF and YC as founders — and raised venture capital in both Europe and the US — we understand the best and worst of incubators, accelerators and hacker houses.",
          "The residency is a living product: our current iteration of what the earliest-stage founder experience should feel like.",
        ],
      },
      {
        title: "The original bridge",
        paragraphs: [
          "We didn’t invent it. Maxence, Estelle, Donia and Pauline ran the first version at Bückeburg Castle in Germany. It was so good that we moved it to San Francisco and began taking it to the next level.",
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
    slug: "random-things",
    title: "Random things",
    year: "2024–2025",
    tag: "side quests",
    filter: "random",
    index: "07",
    summary: "Art shows, game jams, robots, hackathons, and a technical community.",
    intro:
      "Not companies, not exactly hobbies — a collection of rooms I was lucky enough to help make more interesting.",
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
          { title: "Meta Consumer Hackathon", note: "September 2025 — a camera roll full of prototypes and people." },
          { title: "Mistral AI Game Jam", note: "April 2025 — games, models and barely enough sleep." },
          { title: "Europe’s first and biggest Robotics Hackathon", note: "April 2025 — hardware everywhere." },
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
    title: "Things I inexplicably own / do",
    year: "Ongoing",
    tag: "weird",
    filter: "weird",
    index: "08",
    summary: "Rare cacti, plane crashes, three tonnes of spirits, and one racehorse syndicate.",
    intro:
      "The page most likely to explain me — or make me substantially harder to explain.",
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
          { title: "🍎 Cider and Calvados", note: "My family runs a farm in Normandy. I have written several business plans for a cider brand bound for America. We have three tonnes of spirits to sell — hit me up if you want to start that business for me." },
          { title: "♞ Daytona’s Stable", note: "I invested in horse racing with 20 of my best friends from university. I know nothing about horse racing. It is perhaps 10× more thrilling — and 10× less profitable — than venture investing." },
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
    slug: "investment-portfolio",
    title: "Investment portfolio",
    year: "A growing list",
    tag: "investing",
    filter: "investing",
    index: "09",
    summary: "Early bets on obsessive people — with the personal story where there is one.",
    intro:
      "A portfolio should be more than a logo wall. This is a list of companies, and eventually the very human reason behind every yes.",
    cover: {
      label: "EARLY BELIEFS",
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
          "Paul is awesome. We met in Paris in November 2024, well before Eigen was Eigen. He is the most obsessive product thinker I know — a visionary leader and magnetic personality who has already taken Silicon Valley by storm. I’m proud to be one of his first investors, and also a good friend.",
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
          { title: "Goldfish", note: "story incoming" },
          { title: "Avior", note: "story incoming" },
          { title: "Marv Labs", note: "story incoming" },
        ],
      },
    ],
    gallery: [
      { label: "FOUNDER NOTES", note: "personal stories, not logos", tone: "blush", aspect: "wide" },
      { label: "PORTFOLIO MARKS", note: "company logos when supplied", tone: "silver", aspect: "square" },
    ],
  },
  {
    slug: "reading-listening",
    title: "Reading / listening",
    year: "An open shelf",
    tag: "list",
    filter: "random",
    index: "10",
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
    title: "Let’s chat",
    year: "Open inbox",
    tag: "contact",
    index: "11",
    summary: "Hiring, fundraising, GTM, sales, introductions — or one of the stranger topics.",
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
          "I’m always happy to chat 🙂 Add Julia’s email and social links in the site header when they’re ready; the contact surface is already designed for them.",
        ],
      },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

