"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useTransform } from "motion/react";

const markerRanges = [
  { input: [0, 0.2, 0.27], output: [1, 1, 0.35] },
  { input: [0.245, 0.295, 0.455, 0.525], output: [0.35, 1, 1, 0.35] },
  { input: [0.5, 0.55, 0.71, 0.78], output: [0.35, 1, 1, 0.35] },
  { input: [0.755, 0.805, 1], output: [0.35, 1, 1] },
];

const stageBreakpoints = [0.27, 0.525, 0.78];

function ProgressMarker({ number, index, scrollProgress }) {
  const range = markerRanges[index];
  const opacity = useTransform(scrollProgress, range.input, range.output);
  const scale = useTransform(
    scrollProgress,
    range.input,
    range.output.map((value) => (value === 1 ? 1 : 0.86)),
  );

  return (
    <motion.span
      className="border-primary/40 bg-background-secondary text-primary-light relative z-10 flex size-8 items-center justify-center rounded-full border font-mono text-[0.7rem]"
      style={{ opacity, scale }}
    >
      {number}
    </motion.span>
  );
}

export default function ServicesProgress({ services, scrollProgress }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressScale = useTransform(scrollProgress, [0, 1], [0, 1]);
  const total = String(services.length).padStart(2, "0");

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    const nextIndex = stageBreakpoints.findIndex(
      (breakpoint) => latest < breakpoint,
    );
    const resolvedIndex = nextIndex === -1 ? services.length - 1 : nextIndex;

    setActiveIndex((currentIndex) =>
      currentIndex === resolvedIndex ? currentIndex : resolvedIndex,
    );
  });

  return (
    <div
      className="mt-3 sm:mt-5 lg:mt-6"
      aria-label={`${services.length} service stages`}
    >
      <div className="text-muted mb-2 flex items-center justify-between text-xs sm:mb-3">
        <span>Scroll to explore</span>
        <span
          className="font-mono"
          aria-label={`Service ${activeIndex + 1} of ${services.length}`}
        >
          {services[activeIndex].number} / {total}
        </span>
      </div>
      <div className="relative flex items-center justify-between">
        <div className="bg-border absolute inset-x-4 top-1/2 h-px -translate-y-1/2" />
        <motion.div
          className="bg-primary absolute inset-x-4 top-1/2 h-px origin-left -translate-y-1/2"
          style={{ scaleX: progressScale }}
        />
        {services.map((service, index) => (
          <ProgressMarker
            key={service.id}
            number={service.number}
            index={index}
            scrollProgress={scrollProgress}
          />
        ))}
      </div>
    </div>
  );
}
