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
            <strong><a className="about-link" href="/story/about-julia">About me</a></strong>
          </p>
          <p className="talk-line">
            <strong>Talk to me about:</strong> early days of founding, California &amp; the Mediterranean,
            my love for brands, logos and random consumer products, South East Asia and Ireland.
          </p>
          <p className="portfolio-line">
            <strong><a href="/story/investment-portfolio">Investment portfolio:</a></strong>{" "}
            Eigen, Uncovr, Tellia, Certo, Lemrock, Allude, Alassio, Synaps, Goldfish, Avior, Marv Labs
          </p>
        </div>
        <div className="header-actions">
          <nav className="social-list" aria-label="Julia's social links">
            <a href="https://www.linkedin.com/in/julia-denoly/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/juliadenoly" target="_blank" rel="noreferrer">
              X
            </a>
          </nav>
        </div>
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
          {!compact && <span className="media-label">{media.label}</span>}
          {!compact && <span className="media-kind">{media.kind === "video" ? "▶ video slot" : "＋ media slot"}</span>}
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
    </footer>
  );
}
