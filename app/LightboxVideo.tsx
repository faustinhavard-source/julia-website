"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type LightboxVideoProps = {
  src: string;
  poster?: string;
  label: string;
};

export function LightboxVideo({ src, poster, label }: LightboxVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="lightbox-trigger video-lightbox-trigger"
        type="button"
        aria-label={`Play ${label}`}
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          preload="metadata"
          src={src}
        />
      </button>

      {isOpen && createPortal(
        <div className="video-lightbox" onClick={() => setIsOpen(false)}>
          <div
            className="video-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="video-lightbox-close"
              type="button"
              aria-label="Close video"
              autoFocus
              onClick={() => setIsOpen(false)}
            >
              close ×
            </button>
            <video autoPlay controls playsInline poster={poster} src={src} />
            <p>{label}</p>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
