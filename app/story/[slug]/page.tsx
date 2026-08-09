import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FooterNote, MediaFrame, SiteHeader } from "../../components";
import { getStory, stories } from "../../content";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) return {};

  return {
    title: `${story.title} — Julia`,
    description: story.summary,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStory(slug);

  if (!story) notFound();

  const storyIndex = stories.findIndex((item) => item.slug === story.slug);
  const nextStory = stories[(storyIndex + 1) % stories.length];

  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="story-page">
        <div className="story-heading">
          <p className="breadcrumbs">
            <Link href="/">archive</Link> / {story.filter ?? "story"} / {story.slug}
          </p>
          <div className="story-title-wrap">
            <div>
              <p className="kicker">ENTRY {story.index}</p>
              <h1>{story.title}</h1>
            </div>
            <div className="story-stamp">
              <span>{story.year}</span>
              <span className="tag">{story.tag}</span>
            </div>
          </div>
        </div>

        <MediaFrame media={story.hero} />

        <section className="story-lead">
          <p className="lead-index">{story.index} / {String(stories.length - 1).padStart(2, "0")}</p>
          <p>{story.intro}</p>
        </section>

        <div className="story-sections">
          {story.sections.map((section, sectionIndex) => (
            <section className="story-section" key={`${section.title}-${sectionIndex}`}>
              <div className="section-label">
                <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                {section.dek && <p>{section.dek}</p>}
              </div>

              <div className="section-body">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                {section.stats && (
                  <dl className="stat-grid">
                    {section.stats.map((stat) => (
                      <div key={`${stat.value}-${stat.label}`}>
                        <dt>{stat.value}</dt>
                        <dd>{stat.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.bullets && (
                  <ul className="bullet-list">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}

                {section.items && (
                  <div className="item-list">
                    {section.items.map((item, itemIndex) => (
                      <article key={`${item.title}-${itemIndex}`}>
                        <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                        <h3>{item.title}</h3>
                        {item.note && <p>{item.note}</p>}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {story.gallery && story.gallery.length > 0 && (
          <section className="gallery-section">
            <div className="gallery-heading">
              <p className="kicker">MEDIA ARCHIVE</p>
              <h2>Images & videos to drop in</h2>
              <p>
                Every labeled block is a swap-ready media slot. Add the file path in one content entry;
                the layout will take care of the rest.
              </p>
            </div>
            <div className="gallery-grid">
              {story.gallery.map((media, index) => (
                <MediaFrame media={media} key={`${media.label}-${index}`} />
              ))}
            </div>
          </section>
        )}

        {story.links && story.links.length > 0 && (
          <section className="reference-links">
            <h2>Footnotes from the internet</h2>
            <div>
              {story.links.map((link, index) => (
                <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {link.label} ↗
                </a>
              ))}
            </div>
          </section>
        )}

        <nav className="story-next" aria-label="Next archive story">
          <span>NEXT ENTRY</span>
          <Link href={`/story/${nextStory.slug}`}>
            {nextStory.title} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </main>

      <FooterNote />
    </div>
  );
}

