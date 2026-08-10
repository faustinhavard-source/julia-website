import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollabforlovePolaroids } from "../../CollabforlovePolaroids";
import { CollabforloveStoryCollage } from "../../CollabforloveStoryCollage";
import { LightboxImage } from "../../LightboxImage";
import { PortfolioMosaic } from "../../PortfolioMosaic";
import { RandomLinkButton, RandomThingsMedia, RandomYouTubeEmbed } from "../../RandomThingsMedia";
import { TheDropShowcase } from "../../TheDropShowcase";
import { FooterNote, MediaFrame, SiteHeader } from "../../components";
import { getStory, portfolioCompanies, stories } from "../../content";

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
    title: `${story.title} | Julia`,
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

    <main className={`story-page story-${story.slug} ${story.slug === "investment-portfolio" ? "portfolio-story-page" : ""}`}>
        <div className="story-heading">
          <p className="breadcrumbs">
            <a href="/">archive</a> / {story.filter ?? "story"} / {story.slug}
          </p>
          <div className="story-title-wrap">
            <div>
              <p className="kicker">ENTRY {story.index}</p>
              <h1>{story.title}</h1>
            </div>
            <div className="story-stamp">
              <span>{story.year}</span>
              <span className="tag">{story.tag}</span>
              {story.slug === "newtone-ai" && (
                <a className="story-website-link" href="https://www.newtone.ai/" target="_blank" rel="noreferrer">
                  newtone.ai ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {story.slug !== "investment-portfolio" && story.slug !== "the-drop" && story.slug !== "the-bridge" && story.slug !== "random-things" && (
          <MediaFrame media={story.hero} />
        )}

        {story.slug !== "investment-portfolio" && story.slug !== "the-bridge" && (
          <section className="story-lead">
            <p className="lead-index">{story.index} / {String(stories.length - 1).padStart(2, "0")}</p>
            <p>{story.intro}</p>
          </section>
        )}

        {story.slug === "the-drop" && <TheDropShowcase />}

        {story.slug === "the-bridge" && (
          <section className="bridge-team-photo" aria-label="The Bridge team">
            <LightboxImage alt="The full Bridge team together by the San Francisco Bay" src="/media/the-bridge/team.webp" />
          </section>
        )}

        {story.slug === "investment-portfolio" ? (
          <PortfolioMosaic companies={portfolioCompanies} />
        ) : (
        <div className="story-sections">
          {story.sections.map((section, sectionIndex) => (
            <section className="story-section" key={`${section.title}-${sectionIndex}`}>
              <div className="section-label">
                <span>{String(sectionIndex + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                {section.dek && <p>{section.dek}</p>}
              </div>

              <div className="section-body">
                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={`${section.title}-paragraph-${paragraphIndex}`}>
                    {typeof paragraph === "string"
                      ? paragraph
                      : paragraph.segments.map((segment, segmentIndex) =>
                          typeof segment === "string" ? (
                            segment
                          ) : (
                            <a
                              href={segment.href}
                              target="_blank"
                              rel="noreferrer"
                              key={`${segment.href}-${segmentIndex}`}
                            >
                              {segment.label}
                            </a>
                          ),
                        )}
                  </p>
                ))}

                {story.slug === "random-things" && section.title === "Alys Paola’s first Paris exhibition" && (
                  <RandomThingsMedia group="alys" />
                )}

                {story.slug === "random-things" && section.title === "SOTA" && (
                  <RandomLinkButton href="https://watch.getcontrast.io/sota" label="open the SOTA webinars" />
                )}

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

                {story.slug === "collabforlove" && section.title === "The idea" && (
                  <CollabforloveStoryCollage />
                )}

                {story.slug === "collabforlove" && section.title === "Some ridiculous things we auctioned" ? (
                  <CollabforlovePolaroids />
                ) : section.bullets && (
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
                        {story.slug === "random-things" && item.title === "Meta Consumer Hackathon" && (
                          <RandomThingsMedia group="meta" />
                        )}
                        {story.slug === "random-things" && item.title === "Mistral AI Game Jam" && (
                          <>
                            <RandomThingsMedia group="mistral" />
                            <RandomYouTubeEmbed label="Mistral AI Game Jam" videoId="NhPDVAcLzD4" />
                          </>
                        )}
                        {story.slug === "random-things" && item.title === "Europe’s first and biggest Robotics Hackathon" && (
                          <RandomYouTubeEmbed label="Europe’s first and biggest Robotics Hackathon" videoId="-oA0K_rTBKs" />
                        )}
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
        )}

        {story.slug !== "collabforlove" && story.slug !== "the-drop" && story.slug !== "the-bridge" && story.slug !== "random-things" && story.gallery && story.gallery.length > 0 && (
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

        {story.slug !== "random-things" && story.links && story.links.length > 0 && (
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
          <a href={`/story/${nextStory.slug}`}>
            {nextStory.title} <span aria-hidden="true">→</span>
          </a>
        </nav>
      </main>

      <FooterNote />
    </div>
  );
}
