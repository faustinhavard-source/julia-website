import Link from "next/link";
import type { ArchiveEntry } from "./archive";

export function ArchiveCard({ entry }: { entry: ArchiveEntry }) {
  return (
    <Link className="archive-card" href={`/story/${entry.slug}`} aria-label={`Explore ${entry.title}`}>
      <div className="archive-card-media" data-tone={entry.cover.tone} aria-hidden="true">
        <span className="archive-card-title">{entry.title}</span>
      </div>
      <div className="archive-card-caption">
        <h3>{entry.title}</h3>
        <p>{entry.year}</p>
      </div>
    </Link>
  );
}
