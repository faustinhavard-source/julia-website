import Link from "next/link";
import type { ArchiveEntry } from "./archive";
import { MediaFrame } from "./components";

export function ArchiveCard({ entry, priority = false }: { entry: ArchiveEntry; priority?: boolean }) {
  return (
    <Link className="archive-card" href={`/story/${entry.slug}`} aria-label={`Explore ${entry.title}`}>
      <div className="archive-card-media">
        <MediaFrame media={entry.cover} compact loading={priority ? "eager" : "lazy"} />
      </div>
      <div className="archive-card-caption">
        <h3>{entry.title}</h3>
        <p>{entry.year}</p>
      </div>
    </Link>
  );
}
