"use client";

import { motion, useReducedMotion } from "motion/react";
import { CurveDivider } from "./CurveDivider";
import { CopyEmail } from "./CopyEmail";
import type { GithubProfile } from "@/lib/github";

const CONTACT_ROWS: Array<[string, React.ReactNode]> = [
  ["name", "Mayank Bains"],
  ["role", "math & computing student"],
  ["focus", "software engineering, competitive programming, ml"],
];

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ profile }: { profile: GithubProfile | null }) {
  const githubHandle = profile?.login ?? "BainsMayank";
  const githubUrl = profile?.htmlUrl ?? `https://github.com/${githubHandle}`;
  const reduce = useReducedMotion();

  const stepDelay = (step: number) => (reduce ? 0 : step * 0.09);
  const initial = reduce ? false : { opacity: 0, y: 10 };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border-color"
    >
      <CurveDivider className="opacity-80" />
      <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-16 sm:px-6 md:pt-24 md:pb-24">
        <motion.h1
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: stepDelay(0), ease: EASE }}
          className="max-w-2xl text-4xl leading-none font-semibold tracking-tighter text-foreground sm:text-5xl md:text-6xl"
        >
          Math &amp; Computing Student
        </motion.h1>

        <motion.p
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: stepDelay(1), ease: EASE }}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted-strong"
        >
          I build software projects and compete in algorithmic contests, with
          growing interest in machine learning.
        </motion.p>

        <motion.dl
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: stepDelay(2), ease: EASE }}
          className="mt-9 grid max-w-md gap-x-6 gap-y-2 text-sm"
        >
          {CONTACT_ROWS.map(([key, value]) => (
            <div key={key} className="grid grid-cols-[5rem_1fr] gap-3">
              <dt className="text-muted">{key}</dt>
              <dd className="text-foreground">{value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-muted">github</dt>
            <dd>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent-teal underline decoration-accent-teal/30 underline-offset-4 hover:decoration-accent-teal"
              >
                @{githubHandle}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-[5rem_1fr] gap-3">
            <dt className="text-muted">email</dt>
            <dd>
              <CopyEmail />
            </dd>
          </div>
        </motion.dl>

        <motion.div
          initial={initial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: stepDelay(3), ease: EASE }}
          className="mt-9"
        >
          <a
            href="#projects"
            className="inline-block rounded-md border border-accent-teal/50 bg-accent-teal/10 px-5 py-2.5 text-sm font-medium text-accent-teal transition-colors hover:bg-accent-teal/20 active:scale-[0.98]"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
