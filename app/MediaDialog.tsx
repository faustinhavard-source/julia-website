"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function MediaDialog({ open, onClose, label, children }: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog className="media-dialog" ref={dialogRef} aria-label={label} onClose={onClose} onCancel={onClose}>
      <button className="media-dialog-backdrop" tabIndex={-1} type="button" aria-label="Close media" onClick={onClose} />
      <button className="media-dialog-close" ref={closeRef} type="button" onClick={onClose}>Close <span aria-hidden="true">×</span></button>
      <div className="media-dialog-content">{open ? children : null}</div>
    </dialog>
  );
}
