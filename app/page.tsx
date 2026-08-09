import type { Metadata } from "next";
import HomeIndex from "./HomeIndex";

export const metadata: Metadata = {
  title: "Julia — work, side quests & oddities",
  description: "An internet archive of everything Julia has somehow ended up doing.",
};

export default function Home() {
  return <HomeIndex />;
}

