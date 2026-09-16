import { CopyEmail } from "./CopyEmail";

export function Footer({ githubHandle }: { githubHandle: string }) {
  return (
    <footer id="contact" className="mt-auto">
      <div className="mx-auto max-w-5xl px-4 py-10 text-center text-sm text-muted sm:px-6">
        <p>
          Mathematics &amp; Computing student{" "}
          <span className="text-border-color-strong">·</span>{" "}
          <a
            href={`https://github.com/${githubHandle}`}
            target="_blank"
            rel="noreferrer"
            className="text-accent-teal hover:underline"
          >
            github: @{githubHandle}
          </a>
        </p>
        <p className="mt-2 inline-flex flex-wrap items-center justify-center gap-2">
          email: <CopyEmail />
          <span className="text-border-color-strong">·</span>
          <a href="#top" className="text-accent-teal hover:underline">
            back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
