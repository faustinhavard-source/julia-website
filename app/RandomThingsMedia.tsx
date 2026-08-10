import { LightboxImage } from "./LightboxImage";

type RandomMediaGroup = "alys" | "meta" | "mistral";

const media: Record<RandomMediaGroup, Array<{ src: string; alt: string; caption: string }>> = {
  alys: [
    {
      src: "/media/random-things/alys-paola-original.webp",
      alt: "Poster for Alys Paola’s first Paris exhibition in July 2024",
      caption: "Alys Paola, Paris, July 2024",
    },
  ],
  meta: [
    {
      src: "/media/random-things/meta-stickers-original.png",
      alt: "Holographic AI on the Edge stickers from the Meta Consumer Hackathon",
      caption: "AI on the Edge",
    },
    {
      src: "/media/random-things/meta-team-original.png",
      alt: "The team at the Meta Consumer Hackathon",
      caption: "Meta Consumer Hackathon",
    },
    {
      src: "/media/random-things/meta-closing-original.png",
      alt: "Closing ceremony at the Meta Consumer Hackathon",
      caption: "Closing ceremony",
    },
    {
      src: "/media/random-things/meta-shirt-original.png",
      alt: "Spotlight Consumer Edge Hack event shirt",
      caption: "Spotlight Consumer Edge Hack",
    },
    {
      src: "/media/random-things/meta-audience-original.png",
      alt: "The audience at the Meta Consumer Hackathon",
      caption: "A very full room",
    },
  ],
  mistral: [
    {
      src: "/media/random-things/mistral-demo-original.webp",
      alt: "A team presenting its project at the Mistral AI Game Jam",
      caption: "Demo time",
    },
    {
      src: "/media/random-things/mistral-julia-anastasia-original.webp",
      alt: "Julia and Anastasia working together during the Mistral AI Game Jam",
      caption: "Julia + Anastasia",
    },
    {
      src: "/media/random-things/mistral-audience-original.webp",
      alt: "A crowded room during the Mistral AI Game Jam",
      caption: "Mistral AI Game Jam",
    },
    {
      src: "/media/random-things/mistral-lets-hack-original.webp",
      alt: "The Let’s hack sign at the Mistral AI Game Jam",
      caption: "Let’s hack!",
    },
  ],
};

export function RandomThingsMedia({ group }: { group: RandomMediaGroup }) {
  return (
    <div className={`random-media-strip random-media-${group}`} aria-label={`${group} image gallery`}>
      {media[group].map((item, index) => (
        <figure className={`random-media-card random-media-card-${index + 1}`} key={item.src}>
          <LightboxImage src={item.src} alt={item.alt} />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function RandomYouTubeEmbed({ label, videoId }: { label: string; videoId: string }) {
  return (
    <figure className="random-youtube-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={label}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export function RandomLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a className="random-watch-button" href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  );
}
