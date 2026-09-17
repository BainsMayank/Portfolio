import type { ContributionData, ContributionDay } from "@/lib/github";

const LEVEL_STYLES: Record<number, string> = {
  0: "bg-screen-inset border border-grid-line",
  1: "bg-green-dim border border-green-dim",
  2: "bg-green/50 border border-green/50",
  3: "bg-green/80 border border-green/80",
  4: "bg-green border border-green",
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
    <section id="activity" className="border-b-2 border-screen-inset">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <div className="bevel-out">
          <div className="flex items-center gap-3 border-b-2 border-screen-inset bg-screen-inset px-3 py-2">
            <span className="window-corner" aria-hidden />
            <span className="window-corner bg-green-dim" aria-hidden />
            <span className="font-pixel text-[11px] text-ink-dim">
              ACTIVITY.LOG
            </span>
          </div>
          <div className="p-5 sm:p-8">
            <h2 className="font-pixel text-xl text-ink">GitHub Activity</h2>
            <p className="mt-2 font-term text-lg text-ink-dim">
              {data.totalLastYear.toLocaleString()} contributions in the last
              year
              {" · "}
              <a
                href="https://github.com/BainsMayank"
                target="_blank"
                rel="noreferrer"
                className="text-cyan underline decoration-cyan-dim underline-offset-4 hover:decoration-cyan"
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
                          className={`h-[11px] w-[11px] ${LEVEL_STYLES[day.level]}`}
                        />
                      ) : (
                        <div key={`${wi}-${di}`} className="h-[11px] w-[11px]" />
                      )
                    )
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2 font-term text-base text-ink-dim">
                  <span>less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-[11px] w-[11px] ${LEVEL_STYLES[level]}`}
                    />
                  ))}
                  <span>more</span>
                </div>
              </div>
            ) : (
              <p className="mt-8 font-term text-lg text-ink-dim">
                Contribution data is temporarily unavailable.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
