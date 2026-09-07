import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title: {
      default: "Julia: work, investments & side quests",
      template: "%s",
    },
    description: "Julia’s work, investments, side quests, and the stories behind them.",
    applicationName: "Julia’s internet archive",
    openGraph: {
      type: "website",
      title: "Julia: work, investments & side quests",
      description: "Founders, products, investments and side quests, all in one internet archive.",
      images: [{ url: socialImage, width: 1792, height: 934, alt: "Julia’s internet archive" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Julia: work, investments & side quests",
      description: "Founders, products, investments and side quests, all in one internet archive.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
