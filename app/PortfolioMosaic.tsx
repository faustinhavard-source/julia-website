"use client";

import { useState } from "react";
import type { PortfolioCompany } from "./content";

export function PortfolioMosaic({ companies }: { companies: PortfolioCompany[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCompany = companies[activeIndex];

  return (
    <section className="portfolio-mosaic-experience" aria-label="Interactive portfolio company mosaic">
      <div className="portfolio-mosaic-layout">
        <div className="company-mosaic" role="group" aria-label="Julia's portfolio companies">
          {companies.map((company, index) => (
            <button
              className="company-tile"
              data-active={activeIndex === index ? "true" : "false"}
              data-size={company.size}
              data-tone={company.tone}
              type="button"
              aria-pressed={activeIndex === index}
              aria-controls="active-company-story"
              onPointerEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              key={company.name}
            >
              <span className="company-tile-name">{company.name}</span>
              <span className="company-tile-state">
                {company.status === "incoming" ? "incoming" : company.story ? "the story behind the yes" : "portfolio"}
              </span>
            </button>
          ))}
        </div>

        <aside
          className="company-story-panel"
          data-tone={activeCompany.tone}
          id="active-company-story"
          aria-live="polite"
        >
          <div className="company-story-content" key={activeCompany.name}>
            <div className="company-story-meta">
              <span>Investment portfolio</span>
              <span>{activeCompany.status ?? "portfolio note"}</span>
            </div>
            <h2>{activeCompany.name}</h2>
            {activeCompany.story ? (
              <p className="company-story-copy">{activeCompany.story}</p>
            ) : activeCompany.status === "incoming" ? (
              <p className="company-story-placeholder">Incoming.</p>
            ) : (
              <p className="company-story-placeholder">A little story will live here soon.</p>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
