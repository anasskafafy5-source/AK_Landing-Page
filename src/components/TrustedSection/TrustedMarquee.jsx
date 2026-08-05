"use client";

import { motion, useReducedMotion } from "motion/react";
import { trustedCompanies } from "../../../data/trusted-by";

function CompanyCard({ company, index, staticLayout = false }) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !staticLayout;

  return (
    <motion.li
      className={`group border-border bg-surface/80 shadow-background/40 relative flex h-24 shrink-0 items-center gap-3 overflow-hidden rounded-3xl border px-4 shadow-lg backdrop-blur-sm ${
        staticLayout ? "w-full" : "w-52 sm:w-56"
      }`}
      style={{ transformStyle: "preserve-3d" }}
      animate={
        shouldAnimate
          ? {
              rotateX: [3, -2, 3],
              rotateY: [-7, 7, -7],
              y: [0, -4, 0],
            }
          : undefined
      }
      whileHover={
        prefersReducedMotion
          ? undefined
          : { rotateX: 0, rotateY: 0, y: -6, scale: 1.03 }
      }
      transition={{
        duration: 5.5 + (index % 3) * 0.6,
        delay: index * 0.12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="from-primary/10 to-surface-light/40 absolute inset-0 bg-gradient-to-br via-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="via-primary-light/60 absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      <motion.div
        className="border-primary/25 bg-primary/10 text-primary-light shadow-primary/10 relative flex size-11 shrink-0 items-center justify-center rounded-2xl border text-xs font-bold tracking-wider shadow-md"
        style={{ transform: "translateZ(24px)" }}
        animate={
          shouldAnimate
            ? { opacity: [0.75, 1, 0.75], scale: [1, 1.05, 1] }
            : undefined
        }
        transition={{
          duration: 3.4,
          delay: index * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {company.mark}
      </motion.div>

      <span
        className="text-text-secondary group-hover:text-text relative truncate text-sm font-semibold tracking-wide transition-colors duration-300 sm:text-base"
        style={{ transform: "translateZ(14px)" }}
      >
        {company.name}
      </span>
    </motion.li>
  );
}

function CompanyGroup({ duplicate = false }) {
  return (
    <ul
      className="flex shrink-0 gap-4 py-5 pr-4"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {trustedCompanies.map((company, index) => (
        <CompanyCard
          key={`${duplicate ? "duplicate-" : ""}${company.name}`}
          company={company}
          index={index}
        />
      ))}
    </ul>
  );
}

export default function TrustedMarquee() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {trustedCompanies.map((company, index) => (
          <CompanyCard
            key={company.name}
            company={company}
            index={index}
            staticLayout
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="relative overflow-hidden [perspective:1000px]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        <CompanyGroup />
        <CompanyGroup duplicate />
      </motion.div>

      <div className="from-background-secondary pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r to-transparent sm:w-28" />
      <div className="from-background-secondary pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l to-transparent sm:w-28" />
    </div>
  );
}
