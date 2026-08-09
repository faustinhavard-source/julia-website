"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { filters, stories, type Story, type StoryFilter } from "./content";
import { FooterNote, MediaFrame, SiteHeader } from "./components";

type ActiveFilter = "all" | StoryFilter;

function StoryCard({ story }: { story: Story }) {
  return (
    <Link
      className="story-card clutter-card"
      data-slug={story.slug}
      href={`/story/${story.slug}`}
    >
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
          <span className="read-more">open page ↗</span>
        </div>
      </div>
    </Link>
  );
}

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
        <section className="clutter-index" aria-labelledby="clutter-heading">
          <div className="clutter-toolbar">
            <div>
              <p className="kicker">WORK / PROJECTS / ODDITIES</p>
              <h2 id="clutter-heading">Everything else</h2>
              <p>{String(visibleStories.length).padStart(2, "0")} pages showing</p>
            </div>

            <div className="filter-row" role="group" aria-label="Filter Julia's archive">
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

          <div className="clutter-grid" aria-live="polite">
            {visibleStories.map((story) => <StoryCard story={story} key={story.slug} />)}
          </div>
        </section>
      </main>

      <FooterNote />
    </div>
  );
}
