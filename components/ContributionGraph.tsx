import type { ContributionData, ContributionDay } from "@/lib/github";

const LEVEL_STYLES: Record<number, string> = {
  0: "bg-surface-elevated border border-border-color",
  1: "bg-accent-teal/20 border border-accent-teal/20",
  2: "bg-accent-teal/45 border border-accent-teal/45",
  3: "bg-accent-teal/70 border border-accent-teal/70",
  4: "bg-accent-teal border border-accent-teal",
};

function toWeeks(days: ContributionDay[]): (ContributionDay | null)[][] {
  if (days.length === 0) return [];
  const firstDate = new Date(days[0].date + "T00:00:00Z");
  const leadingBlanks = firstDate.getUTCDay(); // 0 = Sunday

  const padded: (ContributionDay | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...days,
  ];

  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function ContributionGraph({ data }: { data: ContributionData }) {
  const weeks = toWeeks(data.days);

  return (
    <section id="activity" className="border-b border-border-color">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          GitHub Activity
        </h2>
        <p className="mt-2 text-sm text-muted">
          {data.totalLastYear.toLocaleString()} contributions in the last year
          {" · "}
          <a
            href="https://github.com/BainsMayank"
            target="_blank"
            rel="noreferrer"
            className="text-accent-teal hover:underline"
          >
            live from the GitHub API
          </a>
        </p>

        {weeks.length > 0 ? (
          <div className="mt-8 overflow-x-auto">
            <div
              className="inline-grid grid-flow-col gap-[3px]"
              style={{ gridTemplateRows: "repeat(7, minmax(0, 1fr))" }}
            >
              {weeks.map((week, wi) =>
                week.map((day, di) =>
                  day ? (
                    <div
                      key={`${wi}-${di}`}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`}
                      className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_STYLES[day.level]}`}
                    />
                  ) : (
                    <div key={`${wi}-${di}`} className="h-[11px] w-[11px]" />
                  )
                )
              )}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <span>less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_STYLES[level]}`}
                />
              ))}
              <span>more</span>
            </div>
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted">
            Contribution data is temporarily unavailable.
          </p>
        )}
      </div>
    </section>
  );
}
