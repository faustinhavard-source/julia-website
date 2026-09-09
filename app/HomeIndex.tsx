"use client";

import { useState } from "react";
import { archiveFilters, type ArchiveEntry, type ArchiveFilter } from "./archive";
import { ArchiveCard } from "./ArchiveCard";

export default function HomeIndex({ entries }: { entries: ArchiveEntry[] }) {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>("all");
  const visibleEntries = entries.filter((entry) => activeFilter === "all" || entry.filter === activeFilter);

  return (
    <section className="archive" id="work" aria-labelledby="archive-heading">
      <div className="archive-toolbar">
        <h2 id="archive-heading">Work & other things</h2>
        <div className="filter-row" role="group" aria-label="Filter Julia's archive">
          {archiveFilters.map((filter) => (
            <button
              className={activeFilter === filter.value ? "is-active" : ""}
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              aria-controls="archive-grid"
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status">{visibleEntries.length} projects shown</p>
      <div className="archive-grid" id="archive-grid">
        {visibleEntries.map((entry, index) => <ArchiveCard entry={entry} priority={index < 3} key={entry.slug} />)}
      </div>
    </section>
  );
}
