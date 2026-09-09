import type { Story } from "./content";

export type ArchiveEntry = Pick<Story, "slug" | "title" | "year" | "filter" | "cover">;
export type ArchiveFilter = "all" | NonNullable<Story["filter"]>;

export const archiveFilters: { label: string; value: ArchiveFilter }[] = [
  { label: "All", value: "all" },
  { label: "Work", value: "work" },
  { label: "Investments", value: "investments" },
  { label: "Side quests", value: "side-quests" },
];
