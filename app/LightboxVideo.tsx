"use client";

import { useState } from "react";
import { MediaDialog } from "./MediaDialog";

type LightboxVideoProps = { src: string; poster?: string; label: string };

export function LightboxVideo({ src, poster, label }: LightboxVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="lightbox-trigger video-lightbox-trigger" type="button" aria-label={`Play ${label}`} onClick={() => setIsOpen(true)}>
        {poster ? <img src={poster} alt={label} loading="lazy" decoding="async" /> : <video muted playsInline preload="metadata" src={src} />}
        <span className="video-play-label"><span aria-hidden="true">▶</span> Play film</span>
      </button>
      <MediaDialog open={isOpen} onClose={() => setIsOpen(false)} label={label}>
        <figure>
          {/* Original archive clips have no caption files; do not invent transcripts. */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video autoPlay controls playsInline poster={poster} src={src} />
          <figcaption>{label}</figcaption>
        </figure>
      </MediaDialog>
    </>
  );
}
