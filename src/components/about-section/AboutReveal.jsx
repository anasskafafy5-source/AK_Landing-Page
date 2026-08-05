"use client";

import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];

export default function AboutReveal({ content, metrics }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
        <div>
          <motion.p
            className="text-primary-light text-xs font-semibold tracking-widest uppercase"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
          >
            {content.label}
          </motion.p>

          <h2
            id="about-title"
            className="text-text mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {content.statementLines.map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.65,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: smoothEase,
                }}
              >
                {line}
              </motion.span>
            ))}
          </h2>
        </div>

        <motion.p
          className="text-text-secondary max-w-xl text-sm leading-7 sm:text-base lg:pb-1"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.65,
            delay: prefersReducedMotion ? 0 : 0.2,
            ease: smoothEase,
          }}
        >
          {content.description}
        </motion.p>
      </div>

      <div className="mt-14 grid gap-4 sm:mt-18 sm:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            className="border-text/10 bg-surface/60 rounded-2xl border p-5 sm:p-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.55,
              delay: prefersReducedMotion ? 0 : index * 0.1,
              ease: smoothEase,
            }}
          >
            <p className="text-primary-light font-mono text-2xl font-semibold sm:text-3xl">
              {metric.value}
            </p>
            <h3 className="text-text mt-4 text-sm font-semibold sm:text-base">
              {metric.label}
            </h3>
            <p className="text-muted mt-2 text-xs leading-5 sm:text-sm sm:leading-6">
              {metric.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
