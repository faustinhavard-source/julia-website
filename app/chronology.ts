const months = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

// Use only the supplied date. Undated entries sort last; equal dates stay stable.
export function archiveDateOrder(label?: string): number {
  const date = label?.toLowerCase() ?? "";
  const years = date.match(/\b\d{4}\b/g);
  if (!years?.length) return 0;

  const month = months.findIndex((name) => date.includes(name)) + 1;
  return Number(years.at(-1)) * 100 + month;
}

type ArchiveEntry = { year?: string; status?: string };

function isCurrent(entry: ArchiveEntry): boolean {
  return entry.status === "incoming" || entry.year?.trim().toLowerCase() === "ongoing";
}

// Incoming and ongoing entries lead the archive, followed by newest dates first.
export function compareArchiveEntries(a: ArchiveEntry, b: ArchiveEntry): number {
  return Number(isCurrent(b)) - Number(isCurrent(a))
    || archiveDateOrder(b.year) - archiveDateOrder(a.year);
}
