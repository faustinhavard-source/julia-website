"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { filters, stories, type StoryFilter } from "./content";
import { FooterNote, MediaFrame, SiteHeader } from "./components";

type ActiveFilter = "all" | StoryFilter;

export default function HomeIndex() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");
  const visibleStories = useMemo(
    () => stories.filter((story) => activeFilter === "all" || story.filter === activeFilter),
    [activeFilter],
  );

  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="home-main">
        <section className="index-intro" aria-labelledby="archive-title">
          <div>
            <p className="kicker">INDEX / WORK / SIDE QUESTS / ODDITIES</p>
            <h1 id="archive-title">
              An internet archive of everything Julia has somehow ended up doing.
            </h1>
          </div>
          <p className="intro-note">
            Part work history, part founder scrapbook, part evidence that curiosity is not a linear
            career strategy.
          </p>
        </section>

        <section className="work-index" aria-label="Julia's archive index">
          <div className="index-toolbar">
            <div>
              <h2>Browse the archive</h2>
              <p>{String(visibleStories.length).padStart(2, "0")} entries showing</p>
            </div>
            <div className="filter-row" role="group" aria-label="Filter archive">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter.value ? "is-active" : ""}
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={activeFilter === filter.value}
                  type="button"
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="story-grid" aria-live="polite">
            {visibleStories.map((story) => (
              <Link className="story-card" href={`/story/${story.slug}`} key={story.slug}>
                <MediaFrame media={story.cover} compact />
                <div className="card-meta">
                  <div className="card-title-row">
                    <h3>{story.title}</h3>
                    <span>{story.index}</span>
                  </div>
                  <p className="card-year">{story.year}</p>
                  <p className="card-summary">{story.summary}</p>
                  <div className="card-bottom">
                    <span className="tag">{story.tag}</span>
                    <span className="read-more">open story ↗</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FooterNote />
    </div>
  );
}

