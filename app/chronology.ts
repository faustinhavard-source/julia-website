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
