import type { Metadata } from "next";
import HomeIndex from "./HomeIndex";

export const metadata: Metadata = {
  title: "Julia: work, investments & side quests",
  description: "Julia’s work, investments, side quests, and the stories behind them.",
};

export default function Home() {
  return <HomeIndex />;
}
