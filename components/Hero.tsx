"use client";

import { motion, useReducedMotion } from "motion/react";
import { CopyEmail } from "./CopyEmail";
import { PlotTicker } from "./PlotTicker";
import type { GithubProfile } from "@/lib/github";

const CONTACT_ROWS: Array<[string, React.ReactNode]> = [
  ["role", "math & computing student"],
  ["focus", "software engineering, competitive programming, ml"],
];

const EASE = [0.4, 0, 0.2, 1] as const;

export function Hero({ profile }: { profile: GithubProfile | null }) {
  const githubHandle = profile?.login ?? "BainsMayank";
  const githubUrl = profile?.htmlUrl ?? `https://github.com/${githubHandle}`;
  const reduce = useReducedMotion();

  const stepDelay = (step: number) => (reduce ? 0 : step * 0.08);
  const initial = reduce ? false : { opacity: 0, y: 8 };

  return (
    <section id="top" className="border-b-2 border-screen-inset">
      <div className="mx-auto max-w-5xl px-4 pt-10 pb-16 sm:px-6 md:pt-14 md:pb-20">
        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: stepDelay(0), ease: EASE }}
          className="bevel-out"
        >
          <div className="flex items-center gap-3 border-b-2 border-screen-inset bg-screen-inset px-3 py-2">
            <span className="window-corner" aria-hidden />
            <span className="window-corner bg-cyan-dim" aria-hidden />
            <span className="font-pixel text-[11px] text-ink-dim">
              IDENTITY.SYS
            </span>
            <div className="ml-auto hidden sm:block">
              <PlotTicker />
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-[1.3fr_1fr] md:gap-10 md:p-10">
            <div>
              <motion.h1
                initial={initial}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: stepDelay(1), ease: EASE }}
                className="font-pixel text-2xl leading-tight text-ink sm:text-3xl md:text-4xl"
              >
                Mayank Bains
              </motion.h1>

              <motion.p
                initial={initial}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: stepDelay(2), ease: EASE }}
                className="mt-4 max-w-md font-term text-xl leading-snug text-ink-dim"
              >
                I build software projects and compete in algorithmic contests,
                with growing interest in machine learning.
              </motion.p>

              <motion.dl
                initial={initial}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: stepDelay(3), ease: EASE }}
                className="mt-6 grid max-w-md gap-y-1.5 font-term text-lg"
              >
                {CONTACT_ROWS.map(([key, value]) => (
                  <div key={key} className="grid grid-cols-[5rem_1fr] gap-3">
                    <dt className="text-ink-faint">{key}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </motion.dl>

              <motion.div
                initial={initial}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: stepDelay(4), ease: EASE }}
                className="mt-7"
              >
                <a
                  href="#projects"
                  className="pixel-btn inline-block px-5 py-3 text-sm"
                >
                  RUN projects.exe
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: stepDelay(2), ease: EASE }}
              className="bevel-in flex flex-col justify-between gap-4 p-4"
            >
              <div className="font-pixel text-[10px] text-ink-faint">
                LIVE.STAT
              </div>
              <dl className="grid grid-cols-2 gap-4 font-term text-lg">
                <div>
                  <dt className="text-ink-faint">repos</dt>
                  <dd className="text-2xl text-green">
                    {profile?.publicRepos ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink-faint">followers</dt>
                  <dd className="text-2xl text-cyan">
                    {profile?.followers ?? "—"}
                  </dd>
                </div>
              </dl>
              <div className="grid gap-1 font-term text-lg">
                <div className="flex items-baseline gap-2">
                  <span className="text-ink-faint">github</span>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan underline decoration-cyan-dim underline-offset-4 hover:decoration-cyan"
                  >
                    @{githubHandle}
                  </a>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-ink-faint">email</span>
                  <CopyEmail />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
