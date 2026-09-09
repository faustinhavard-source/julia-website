import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const metadataBase = new URL("https://julia-website-review.jambon-beurre.chatgpt.site");
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
      <head>
        <link rel="preload" href="/fonts/karrik-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
