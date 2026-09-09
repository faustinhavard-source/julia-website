import type { Story, StoryFilter } from "./content";

export type ArchiveEntry = Pick<Story, "slug" | "title" | "year" | "status" | "filter" | "cover">;
export type ArchiveFilter = "all" | NonNullable<Story["filter"]>;

export const archiveCategories: Record<StoryFilter, string> = {
  work: "Work",
  investments: "Investment",
  "side-quests": "Side quest",
};

export const archiveFilters: { label: string; value: ArchiveFilter }[] = [
  { label: "All", value: "all" },
  { label: "Work", value: "work" },
  { label: "Investments", value: "investments" },
  { label: "Side quests", value: "side-quests" },
];
