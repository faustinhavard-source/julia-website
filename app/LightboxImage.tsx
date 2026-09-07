"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function LightboxImage({ src, alt }: { src: string; alt: string }) {
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
        className="lightbox-trigger"
        type="button"
        aria-label={`Open ${alt} full screen`}
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
      >
        <img alt={alt} loading="lazy" src={src} />
      </button>

      {isOpen && createPortal(
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            className="image-lightbox-close"
            type="button"
            aria-label="Close image"
            autoFocus
            onClick={() => setIsOpen(false)}
          >
            close ×
          </button>
          <figure>
            <img alt={alt} src={src} />
            <figcaption>{alt}</figcaption>
          </figure>
        </div>,
        document.body,
      )}
    </>
  );
}
