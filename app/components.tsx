import type { MediaItem } from "./content";

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Julia Denoly, home">
          Julia <span aria-hidden="true" className="wordmark-flower">✳</span>
        </a>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="/#work">Explore</a>
          <a href="/story/about-julia">About</a>
          <div className="social-list">
            <a href="https://www.linkedin.com/in/julia-denoly/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/juliadenoly" target="_blank" rel="noreferrer" aria-label="Julia on X">X</a>
          </div>
        </nav>
      </header>
    </>
  );
}

export function HomeIntro() {
  return (
    <section className="home-intro" aria-labelledby="home-heading">
      <div className="intro-heading">
        <p className="eyebrow">Julia Denoly</p>
        <h1 id="home-heading">Building things.<br />Backing people.</h1>
      </div>
      <div className="intro-copy">
        <p>Currently building <a href="https://www.join-thebridge.com/" target="_blank" rel="noreferrer">The Bridge</a> at Entrepreneurs First.</p>
        <p>Talk to me about the early days of founding, brands and consumer products, California, the Mediterranean, South East Asia and Ireland.</p>
        <a className="text-link" href="/story/about-julia">A little more about me <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

export function MediaFrame({ media, compact = false, loading = "eager" }: {
  media: MediaItem;
  compact?: boolean;
  loading?: "eager" | "lazy";
}) {
  return (
    <figure className={`media-frame ${compact ? "media-compact" : ""} aspect-${media.aspect ?? "square"}`} data-tone={media.tone}>
      {media.src ? (
        media.kind === "video" ? (
          <video src={media.src} muted loop playsInline preload="metadata" aria-label={media.label} />
        ) : (
          <img src={media.src} alt={media.label} loading={loading} decoding="async" />
        )
      ) : (
        <div className="placeholder-art" role="img" aria-label={`${media.label}, image to come`}>
          <span className="placeholder-title" aria-hidden="true">{media.label}</span>
        </div>
      )}
      {!compact && media.src && <figcaption>{media.note}</figcaption>}
    </figure>
  );
}

export function FooterNote() {
  return (
    <footer className="site-footer">
      <span>Julia Denoly</span>
    </footer>
  );
}
