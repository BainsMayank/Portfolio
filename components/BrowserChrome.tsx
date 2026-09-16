import Image from "next/image";

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
    <div className="overflow-hidden rounded-md border border-border-color bg-surface transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent-teal/40">
      <div className="flex items-center gap-3 border-b border-border-color bg-surface-elevated px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-color-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-color-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-color-strong" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-sm bg-background/60 px-2 py-0.5 text-[11px] text-muted">
          {url}
        </div>
      </div>
      <div className="relative aspect-[1200/630] w-full bg-background">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
          unoptimized
        />
      </div>
    </div>
  );
}
