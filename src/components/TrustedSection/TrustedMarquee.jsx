"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { trustedCompanies } from "../../../data/trusted-by";

function CompanyCard({ company, index, staticLayout = false }) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && !staticLayout;
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const pointerHighlight = useMotionTemplate`radial-gradient(circle at ${pointerX}px ${pointerY}px, var(--color-primary), transparent 60%)`;

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  const resetPointer = () => {
    pointerX.set(-100);
    pointerY.set(-100);
  };

  return (
    <motion.li
      className={`group border-border bg-surface/80 shadow-background/40 hover:border-primary/60 hover:bg-surface-light/85 hover:shadow-primary/15 relative h-24 shrink-0 overflow-hidden rounded-3xl border px-4 shadow-lg backdrop-blur-sm transition-[background-color,border-color,box-shadow] duration-300 ${
        staticLayout ? "w-full" : "w-52 sm:w-56"
      }`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.025 }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="from-primary/10 to-surface-light/40 absolute inset-0 bg-gradient-to-br via-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="via-primary-light/60 absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
        style={{ background: pointerHighlight }}
      />

      <motion.div
        className="relative flex h-full items-center gap-3"
        style={{ transformStyle: "preserve-3d" }}
        animate={
          shouldAnimate
            ? {
                rotateX: [3, -2, 3],
                rotateY: [-7, 7, -7],
                y: [0, -3, 0],
              }
            : undefined
        }
        transition={{
          duration: 5.5 + (index % 3) * 0.6,
          delay: index * 0.12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="border-primary/35 bg-primary/15 text-primary-light shadow-primary/10 group-hover:border-primary/70 group-hover:bg-primary/30 group-hover:text-text relative flex size-11 shrink-0 items-center justify-center rounded-2xl border text-xs font-bold tracking-wider shadow-md transition-colors duration-300"
          style={{ transform: "translateZ(24px)" }}
          animate={
            shouldAnimate
              ? { opacity: [0.8, 1, 0.8], scale: [1, 1.04, 1] }
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
          className="text-text-secondary group-hover:text-primary-light relative truncate text-sm font-semibold tracking-wide transition-colors duration-300 sm:text-base"
          style={{ transform: "translateZ(14px)" }}
        >
          {company.name}
        </span>
      </motion.div>
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
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-4">
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
    <motion.div
      className="relative overflow-hidden [perspective:1000px]"
      initial={{ opacity: 0, x: -72 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
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
    </motion.div>
  );
}
