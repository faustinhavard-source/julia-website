"use client";

import { useMemo, useState } from "react";
import { filters, stories, type Story, type StoryFilter } from "./content";
import { FooterNote, MediaFrame, SiteHeader } from "./components";

type ActiveFilter = "all" | StoryFilter;

function StoryCard({ story }: { story: Story }) {
  return (
    <a
      className="story-card clutter-card"
      data-slug={story.slug}
      href={`/story/${story.slug}`}
      aria-label={`Open ${story.title}`}
    >
      <MediaFrame media={story.cover} compact />
      <div className="card-meta">
        <p className="card-year">{story.year}</p>
        <h3>{story.title}</h3>
      </div>
    </a>
  );
}

export default function HomeIndex() {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");
  const visibleStories = useMemo(
    () => stories.filter(
      (story) => story.filter && (activeFilter === "all" || story.filter === activeFilter),
    ),
    [activeFilter],
  );

  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="home-main">
        <section className="clutter-index" aria-labelledby="clutter-heading">
          <div className="clutter-toolbar">
            <h1 id="clutter-heading">WORK</h1>

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
