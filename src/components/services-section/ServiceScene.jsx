"use client";

import { Check } from "lucide-react";
import { motion, useTransform } from "motion/react";

function getSceneKeyframes(index, total) {
  if (index === 0) {
    return {
      input: [0, 0.2, 0.25],
      y: [0, 0, -88],
      opacity: [1, 1, 0],
      scale: [1, 1, 0.98],
    };
  }

  if (index === total - 1) {
    return {
      input: [0.755, 0.805, 1],
      y: [120, 0, 0],
      opacity: [0, 1, 1],
      scale: [0.965, 1, 1],
    };
  }

  const entryStart = 0.245 + (index - 1) * 0.255;

  return {
    input: [
      entryStart,
      entryStart + 0.05,
      entryStart + 0.21,
      entryStart + 0.26,
    ],
    y: [120, 0, 0, -88],
    opacity: [0, 1, 1, 0],
    scale: [0.965, 1, 1, 0.98],
  };
}

export default function ServiceScene({
  children,
  index,
  total,
  scrollProgress,
  motionDirection = "vertical",
  className = "",
}) {
  const entersFromRight = motionDirection === "right";
  const keyframes =
    entersFromRight && index === 0
      ? {
          input: [0, 0.05, 0.2, 0.25],
          y: [120, 0, 0, -88],
          opacity: [0, 1, 1, 0],
          scale: [0.965, 1, 1, 0.98],
        }
      : getSceneKeyframes(index, total);
  const xValues = keyframes.y.map((value) => {
    if (!entersFromRight || value === 0) return 0;
    return value > 0 ? 112 : -48;
  });
  const yValues = entersFromRight
    ? keyframes.y.map((value) => {
        if (value === 0) return 0;
        return value > 0 ? 18 : -18;
      })
    : keyframes.y;
  const x = useTransform(scrollProgress, keyframes.input, xValues);
  const y = useTransform(scrollProgress, keyframes.input, yValues);
  const opacity = useTransform(
    scrollProgress,
    keyframes.input,
    keyframes.opacity,
  );
  const scale = useTransform(scrollProgress, keyframes.input, keyframes.scale);
  const visibility = useTransform(opacity, (value) =>
    value <= 0.01 ? "hidden" : "visible",
  );

  const initialScene =
    index === 0
      ? {
          opacity: entersFromRight ? 0 : 1,
          x: entersFromRight ? 112 : 0,
          y: entersFromRight ? 18 : 0,
          scale: entersFromRight ? 0.965 : 1,
        }
      : {
          opacity: 0,
          x: entersFromRight ? 112 : 0,
          y: entersFromRight ? 18 : 120,
          scale: 0.965,
        };

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      initial={initialScene}
      style={{ x, y, opacity, scale, visibility, zIndex: index + 1 }}
    >
      {children}
    </motion.div>
  );
}

export function MobileServiceScene({ service, children, reducedMotion }) {
  return (
    <motion.article
      aria-labelledby={`${service.id}-mobile-title`}
      className="border-border bg-surface/55 shadow-background/30 overflow-hidden rounded-3xl border p-5 shadow-xl sm:p-7"
      initial={reducedMotion ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reducedMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-primary-light font-mono text-sm">
          {service.number}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            service.aiAccent
              ? "border-accent/30 bg-accent/10 text-accent-light"
              : "border-primary/30 bg-primary/10 text-primary-light"
          }`}
        >
          {service.accentLabel}
        </span>
      </div>

      <h3
        id={`${service.id}-mobile-title`}
        className="text-text mt-5 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {service.title}
      </h3>
      <p className="text-text-secondary mt-3 max-w-xl text-sm leading-6 sm:text-base sm:leading-7">
        {service.shortDescription}
      </p>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {service.benefits.map((benefit) => (
          <li
            key={benefit}
            className="text-text-secondary flex items-center gap-2 text-sm"
          >
            <span className="bg-primary/10 text-primary-light flex size-5 shrink-0 items-center justify-center rounded-full">
              <Check aria-hidden="true" size={12} strokeWidth={2} />
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-7">{children}</div>
    </motion.article>
  );
}
