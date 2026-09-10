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

  const sectionLabel = story.filter === "side-quests"
    ? "side quests"
    : story.filter ?? story.tag;

  return (
    <div className="site-shell story-shell">
      <SiteHeader />

      <main id="main-content" className={`story-page story-${story.slug} ${story.slug === "investment-portfolio" ? "portfolio-story-page" : ""}`}>
        <header className="story-heading">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <a href="/#work">Explore</a>
            <span aria-hidden="true">/</span>
            <span>{sectionLabel}</span>
          </nav>
          <h1>{story.title}</h1>
          {story.year && <p className="story-year">{story.year}</p>}
          <p className="story-category"><span className="tag">{story.tag}{story.status === "incoming" && " · incoming"}</span></p>
          {story.slug === "newtone-ai" && (
            <a className="story-website-link" href="https://www.newtone.ai/" target="_blank" rel="noreferrer">
              newtone.ai ↗
            </a>
          )}
        </header>

        <section className="story-feature" aria-label={`${story.title} introduction`}>
          <MediaFrame media={story.hero.src ? story.hero : story.cover} compact />
          <div className="story-feature-copy">
            <h2>{story.title}</h2>
            <p>{story.intro}</p>
          </div>
        </section>

        {story.slug === "the-drop" && <TheDropShowcase />}

        {story.slug === "the-bridge" && (
          <section className="bridge-team-photo" aria-label="The Bridge team">
            <LightboxImage alt="The full Bridge team together by the San Francisco Bay" src="/media/the-bridge/team.webp" />
          </section>
        )}

        {story.slug === "meta-consumer-hackathon" && <RandomThingsMedia group="meta" />}

        {story.slug === "mistral-ai-game-jam" && (
          <div className="deferred-media-block">
            <RandomThingsMedia group="mistral" />
            <RandomYouTubeEmbed label="Mistral AI Game Jam" videoId="NhPDVAcLzD4" />
          </div>
        )}

        {story.slug === "robotics-hackathon" && (
          <div className="deferred-media-block">
            <RandomYouTubeEmbed label="Europe’s biggest and first Robotics Hackathon" videoId="-oA0K_rTBKs" />
          </div>
        )}

        {story.slug === "investment-portfolio" ? (
          <PortfolioMosaic companies={portfolioCompanies} />
        ) : story.sections.length > 0 ? (
        <div className="story-sections">
          {story.sections.map((section, sectionIndex) => (
            <section className="story-section" key={`${section.title}-${sectionIndex}`}>
              <div className="section-label">
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
        ) : null}

        {story.slug !== "collabforlove" && story.slug !== "the-drop" && story.slug !== "the-bridge" && story.slug !== "random-things" && story.gallery?.some((media) => media.src) && (
          <section className="gallery-section">
            <div className="gallery-heading">
              <h2>Images &amp; videos</h2>
            </div>
            <div className="gallery-grid">
              {story.gallery.map((media, index) => (
                <MediaFrame media={media} loading="lazy" key={`${media.label}-${index}`} />
              ))}
            </div>
          </section>
        )}

        {story.links && story.links.length > 0 && (
          <section className="reference-links">
            <h2>Links</h2>
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
      </main>
      <FooterNote />
    </div>
  );
}
