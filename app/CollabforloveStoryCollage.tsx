import { LightboxImage } from "./LightboxImage";

export function CollabforloveStoryCollage() {
  return (
    <section className="collab-story-collage" aria-label="Collabforlove founders and press archive">
      <p className="collab-collage-label">PEOPLE / PRESS / 2020</p>

      <figure className="collab-collage-piece collab-collage-press">
        <LightboxImage
          alt="Madame Figaro press page featuring Collabforlove"
          src="/media/collabforlove/madame-figaro-press.png"
        />
        <figcaption>Madame Figaro, one of 30+ media features</figcaption>
      </figure>

      <figure className="collab-collage-piece collab-collage-standing">
        <LightboxImage
          alt="Julia and Eole standing together in Paris"
          src="/media/collabforlove/julia-eole-standing.png"
        />
        <figcaption>Julia + Eole, the people behind the feed</figcaption>
      </figure>

      <figure className="collab-collage-piece collab-collage-seated">
        <LightboxImage
          alt="Julia and Eole sitting together in a Paris garden"
          src="/media/collabforlove/julia-eole-seated.png"
        />
        <figcaption>Built together, entirely through community</figcaption>
      </figure>
    </section>
  );
}
