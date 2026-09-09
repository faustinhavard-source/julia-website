"use client";

import { useState } from "react";
import { MediaDialog } from "./MediaDialog";

export function LightboxImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="lightbox-trigger" type="button" aria-label={`Open ${alt} full screen`} onClick={() => setIsOpen(true)}>
        <img alt={alt} loading="lazy" decoding="async" src={src} />
      </button>
      <MediaDialog open={isOpen} onClose={() => setIsOpen(false)} label={alt}>
        <figure><img alt={alt} src={src} /><figcaption>{alt}</figcaption></figure>
      </MediaDialog>
    </>
  );
}
