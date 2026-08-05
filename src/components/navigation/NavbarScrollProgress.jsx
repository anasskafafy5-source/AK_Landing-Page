"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export default function NavbarScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.25,
    restDelta: 0.001,
  });
  const displayedProgress = prefersReducedMotion
    ? scrollYProgress
    : smoothProgress;

  return (
    <motion.div
      aria-hidden="true"
      className="bg-primary absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full"
      style={{ scaleX: displayedProgress }}
    />
  );
}
