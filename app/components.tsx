import type { MediaItem } from "./content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="identity-block">
        <div className="identity-copy">
          <a className="wordmark" href="/" aria-label="Julia's archive home">
            ✦ Julia ✦
          </a>
          <p>
            <strong>Currently:</strong> building <mark>The Bridge</mark> @ Entrepreneurs First
          </p>
          <p>
            <strong>Previously:</strong> founder, fashion, sales, and too many side quests
          </p>
          <p className="talk-line">
            <strong>Talk to me about:</strong> founders, retail, strange businesses, SF vs Europe,
            <mark> plane crashes</mark>, cider, and finding your life’s work.
          </p>
          <p className="portfolio-line">
            <strong><a href="/story/investment-portfolio">Investment portfolio:</a></strong>{" "}
            Eigen, Uncovr, Tellia, Certo, Lemrock, Allude, Alassio, Synaps, Goldfish, Avior, Marv Labs
          </p>
        </div>
        <nav className="social-list" aria-label="Social links awaiting Julia's URLs">
          <span>LinkedIn <i>[add link]</i></span>
          <span>Instagram <i>[add link]</i></span>
          <span>X <i>[add link]</i></span>
          <span>Email <i>[add link]</i></span>
        </nav>
      </div>
    </header>
  );
}

export function MediaFrame({ media, compact = false }: { media: MediaItem; compact?: boolean }) {
  return (
    <figure
      className={`media-frame ${compact ? "media-compact" : ""} aspect-${media.aspect ?? "square"}`}
      data-tone={media.tone}
    >
      {media.src ? (
        media.kind === "video" ? (
          <video src={media.src} muted loop playsInline aria-label={media.label} />
        ) : (
          <img src={media.src} alt={media.label} />
        )
      ) : (
        <div className="placeholder-art" role="img" aria-label={`Media placeholder: ${media.label}`}>
          <span className="shape shape-a" aria-hidden="true" />
          <span className="shape shape-b" aria-hidden="true" />
          <span className="shape shape-c" aria-hidden="true" />
          <span className="media-label">{media.label}</span>
          <span className="media-kind">{media.kind === "video" ? "▶ video slot" : "＋ media slot"}</span>
        </div>
      )}
      {!compact && <figcaption>{media.note}</figcaption>}
    </figure>
  );
}

export function FooterNote() {
  return (
    <footer className="site-footer">
      <span>Julia’s internet archive</span>
      <span>WIP, on purpose</span>
      <span>10 pages / one life so far</span>
    </footer>
  );
}
