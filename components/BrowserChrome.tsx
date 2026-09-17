import { DitheredImage } from "./DitheredImage";

export function BrowserChrome({
  url,
  imageSrc,
  imageAlt,
}: {
  url: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="bevel-out overflow-hidden transition-transform duration-150 group-hover:-translate-y-1">
      <div className="flex items-center gap-2 border-b-2 border-screen-inset bg-screen-inset px-2 py-1.5">
        <span className="window-corner" aria-hidden />
        <span className="window-corner bg-green-dim" aria-hidden />
        <div className="bevel-in min-w-0 flex-1 truncate px-2 py-0.5 font-term text-base text-ink-dim">
          {url}
        </div>
      </div>
      <div className="relative aspect-[1200/630] w-full bg-screen">
        <DitheredImage src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
}
