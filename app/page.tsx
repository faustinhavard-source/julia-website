import type { Metadata } from "next";
import HomeIndex from "./HomeIndex";
import { FooterNote, HomeIntro, SiteHeader } from "./components";
import { stories } from "./content";

export const metadata: Metadata = {
  title: "Julia Denoly — work, investments & side quests",
  description: "Building things. Backing people. Julia Denoly’s work, investments and side quests.",
};

export default function Home() {
  const entries = stories.filter((story) => story.filter).map(({ slug, title, year, filter, cover }) => ({ slug, title, year, filter, cover }));
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="home-main" id="main-content">
        <HomeIntro />
        <HomeIndex entries={entries} />
      </main>
      <FooterNote />
    </div>
  );
}
