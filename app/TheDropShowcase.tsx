import { LightboxImage } from "./LightboxImage";
import { LightboxVideo } from "./LightboxVideo";

const demos = [
  {
    title: "Shop small",
    description: "A social clip introducing The Drop to shoppers.",
    src: "/media/the-drop/shop-small.mp4",
    poster: "/media/the-drop/shop-small-poster.jpg",
    duration: "00:19",
  },
  {
    title: "Buyer flow",
    description: "The product in motion, from shop page to sold-out item.",
    src: "/media/the-drop/buyer-flow.mp4",
    poster: "/media/the-drop/buyer-flow-poster.jpg",
    duration: "02:55",
  },
  {
    title: "Spring Symphony",
    description: "A video-first campaign made for one of the drops.",
    src: "/media/the-drop/spring-symphony.mp4",
    poster: "/media/the-drop/spring-symphony-poster.jpg",
    duration: "00:17",
  },
];

export function TheDropShowcase() {
  return (
    <section className="drop-showcase" aria-label="The Drop founders and product demos">
      <div className="drop-founder-story">
        <div className="drop-founder-photo">
          <LightboxImage
            alt="Julia and Anastasia Wolter together on a flight"
            src="/media/the-drop/julia-anastasia-flight.jpg"
          />
        </div>
      </div>

      <div className="drop-demo-heading">
        <div>
          <p className="kicker">THE DROP / PRODUCT ARCHIVE</p>
          <h2>Three demos from a video-first shop.</h2>
        </div>
        <p>The demos play silently here. Click one to open it with sound and controls.</p>
      </div>

      <div className="drop-demo-grid">
        {demos.map((demo, index) => (
          <article className="drop-demo-card" key={demo.title}>
            <div className="drop-demo-screen">
              <LightboxVideo label={`${demo.title}, The Drop demo`} poster={demo.poster} src={demo.src} />
            </div>
            <div className="drop-demo-meta">
              <span>{String(index + 1).padStart(2, "0")} / {demo.duration}</span>
              <h3>{demo.title}</h3>
              <p>{demo.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
