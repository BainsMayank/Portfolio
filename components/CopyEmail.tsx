"use client";

import { useState } from "react";
import { Copy, Check } from "@phosphor-icons/react";

const EMAIL = "bainsmayank@icloud.com";
const DISPLAY = "bainsmayank [at] icloud [dot] com";

export function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable; the address is still visible to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`glitch-hover inline-flex items-center gap-1.5 text-left text-ink transition-colors hover:text-cyan ${className}`}
      aria-label="Copy email address to clipboard"
    >
      {copied ? "copied" : DISPLAY}
      {copied ? (
        <Check weight="bold" className="h-3.5 w-3.5 text-cyan" />
      ) : (
        <Copy weight="bold" className="h-3.5 w-3.5 text-ink-faint" />
      )}
    </button>
  );
}
