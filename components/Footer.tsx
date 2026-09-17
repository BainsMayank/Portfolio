import { CopyEmail } from "./CopyEmail";

export function Footer({ githubHandle }: { githubHandle: string }) {
  return (
    <footer id="contact" className="mt-auto border-t-2 border-screen-inset bg-screen-raised">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-6 text-center font-term text-lg text-ink-dim sm:flex-row sm:justify-between sm:px-6">
        <p className="flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 cycle-dot" />
          STATUS: ONLINE
          <span aria-hidden className="term-cursor text-cyan">
            _
          </span>
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2">
          <a
            href={`https://github.com/${githubHandle}`}
            target="_blank"
            rel="noreferrer"
            className="text-cyan hover:underline"
          >
            github: @{githubHandle}
          </a>
          <span className="text-bevel-light">·</span>
          <CopyEmail />
          <span className="text-bevel-light">·</span>
          <a href="#top" className="text-cyan hover:underline">
            back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
