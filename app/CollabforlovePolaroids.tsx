import { LightboxImage } from "./LightboxImage";
import { LightboxVideo } from "./LightboxVideo";

type Polaroid = {
  title: string;
  description: string;
  src: string;
  alt: string;
  kind?: "video";
  poster?: string;
  fit?: "contain";
  note: string;
};

const polaroids: Polaroid[] = [
  {
    title: "Zinedine Zidane’s boots",
    description: "Signed football boots, sold for $4k.",
    src: "/media/collabforlove/zidane-boots.webp",
    alt: "Zinedine Zidane's signed neon football boots on grass",
    note: "football / auction lot",
  },
  {
    title: "Tony Parker’s NBA hat",
    description: "A video from one of the sports lots.",
    src: "/media/collabforlove/tony-parker.mp4",
    poster: "/media/collabforlove/tony-parker-poster.jpg",
    alt: "Tony Parker video from the Collabforlove auction archive",
    kind: "video",
    note: "video / 00:07",
  },
  {
    title: "Lucas Pouille’s racket",
    description: "The tennis racket that joined the auction.",
    src: "/media/collabforlove/lucas-pouille-racket.webp",
    alt: "Lucas Pouille holding a tennis racket",
    note: "tennis / auction lot",
  },
  {
    title: "Vincent Clerc’s boots",
    description: "Signed rugby boots from Vincent Clerc.",
    src: "/media/collabforlove/vincent-clerc-boots.webp",
    alt: "Vincent Clerc holding signed red rugby boots",
    note: "rugby / auction lot",
  },
  {
    title: "Bob Sinclar’s collector LP",
    description: "A collector LP from Bob Sinclar.",
    src: "/media/collabforlove/bob-sinclar.mp4",
    poster: "/media/collabforlove/bob-sinclar-poster.jpg",
    alt: "Bob Sinclar presenting the collector LP auctioned by Collabforlove",
    kind: "video",
    note: "music / video 00:16",
  },
  {
    title: "47TER’s VIP tickets",
    description: "VIP concert tickets from the group 47TER.",
    src: "/media/collabforlove/47ter.mp4",
    poster: "/media/collabforlove/47ter-poster.jpg",
    alt: "A member of 47TER presenting VIP concert tickets for Collabforlove",
    kind: "video",
    note: "music / video 00:14",
  },
  {
    title: "JR, Giants, Miguel",
    description:
      "« Giants, Miguel, Casa Amarela, Morro da Providência, Rio de Janeiro, Brazil », JR, 2018.",
    src: "/media/collabforlove/jr-giants-miguel.webp",
    alt: "JR's Giants, Miguel artwork in Morro da Providência, Rio de Janeiro",
    note: "art / JR / 2018",
  },
  {
    title: "Soledad, original for Collabforlove",
    description: "An original artwork created for Collabforlove by French designer Soledad.",
    src: "/media/collabforlove/soledad-original.png",
    alt: "Soledad's original Sympa le confinement artwork for Collabforlove",
    fit: "contain",
    note: "art / Soledad / 2020",
  },
];

export function CollabforlovePolaroids() {
  return (
    <div className="collab-polaroid-wall" aria-label="Collabforlove auction media archive">
      {polaroids.map((polaroid, index) => (
        <figure className="collab-polaroid" key={polaroid.title}>
          <div className="collab-polaroid-media" data-fit={polaroid.fit}>
            {polaroid.kind === "video" ? (
              <LightboxVideo
                label={polaroid.alt}
                poster={polaroid.poster}
                src={polaroid.src}
              />
            ) : (
              <LightboxImage alt={polaroid.alt} src={polaroid.src} />
            )}
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <figcaption>
            <p className="collab-polaroid-note">{polaroid.note}</p>
            <h3>{polaroid.title}</h3>
            <p>{polaroid.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
