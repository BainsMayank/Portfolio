"use client";

import { useEffect, useRef, useState } from "react";

// 4x4 Bayer matrix, normalized to 0..15 thresholds against a 0..255 luminance field.
const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

function hexToRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.replace("#", ""), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

/**
 * Ordered (Bayer) dither to a 2-tone palette, drawn on canvas at load time.
 * Falls back to a plain <img> if the source can't be read back (CORS, load
 * failure, or a browser without canvas) so the page never breaks on this.
 */
export function DitheredImage({
  src,
  alt,
  darkHex = "#0a0c12",
  lightHex = "#52d9e6",
  className = "",
}: {
  src: string;
  alt: string;
  darkHex?: string;
  lightHex?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";

    img.onload = () => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const w = 200;
      const h = Math.round((img.naturalHeight / img.naturalWidth) * w) || 105;
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        setFailed(true);
        return;
      }

      try {
        ctx.drawImage(img, 0, 0, w, h);
        const frame = ctx.getImageData(0, 0, w, h);
        const dark = hexToRgb(darkHex);
        const light = hexToRgb(lightHex);

        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const i = (y * w + x) * 4;
            const lum =
              0.299 * frame.data[i] +
              0.587 * frame.data[i + 1] +
              0.114 * frame.data[i + 2];
            const threshold = ((BAYER_4X4[y % 4][x % 4] + 0.5) / 16) * 255;
            const on = lum > threshold;
            const [r, g, b] = on ? light : dark;
            frame.data[i] = r;
            frame.data[i + 1] = g;
            frame.data[i + 2] = b;
            frame.data[i + 3] = 255;
          }
        }

        ctx.putImageData(frame, 0, 0);
        setReady(true);
      } catch {
        // tainted canvas (CORS) or unreadable source — degrade to plain img
        setFailed(true);
      }
    };

    img.onerror = () => {
      if (!cancelled) setFailed(true);
    };

    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src, darkHex, lightHex]);

  if (failed) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover grayscale contrast-125 ${className}`}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      className={`h-full w-full [image-rendering:pixelated] object-cover transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
