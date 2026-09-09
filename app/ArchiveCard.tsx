import Link from "next/link";
import { archiveCategories, type ArchiveEntry } from "./archive";

export function ArchiveCard({ entry }: { entry: ArchiveEntry }) {
  return (
    <Link className="archive-card" href={`/story/${entry.slug}`} aria-label={`Explore ${entry.title}`}>
      <div className="archive-card-media" data-tone={entry.cover.tone} aria-hidden="true">
        <span className="archive-card-title">{entry.title}</span>
      </div>
      <div className="archive-card-caption">
        <h3>{entry.title}</h3>
        {entry.filter && <p className="archive-card-category">{archiveCategories[entry.filter]}{entry.status === "incoming" && <span> · Incoming</span>}</p>}
        {entry.year && <p className="archive-card-year">{entry.year}</p>}
      </div>
    </Link>
  );
}
