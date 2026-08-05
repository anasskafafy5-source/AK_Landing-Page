"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

export default function TrustedSpotlight({ children }) {
  const pointerX = useMotionValue(-500);
  const pointerY = useMotionValue(-500);
  const spotlightVisibility = useMotionValue(0);
  const smoothVisibility = useSpring(spotlightVisibility, {
    stiffness: 180,
    damping: 28,
    mass: 0.3,
  });
  const spotlightBackground = useMotionTemplate`radial-gradient(420px circle at ${pointerX}px ${pointerY}px, var(--color-primary), transparent 68%)`;

  const updateSpotlight = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
    spotlightVisibility.set(0.14);
  };

  const hideSpotlight = () => {
    spotlightVisibility.set(0);
  };

  return (
    <section
      id="trusted-by"
      aria-labelledby="trusted-title"
      onPointerEnter={updateSpotlight}
      onPointerMove={updateSpotlight}
      onPointerLeave={hideSpotlight}
      className="border-border bg-background-secondary relative overflow-hidden border-y py-16 sm:py-20"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: spotlightBackground,
          opacity: smoothVisibility,
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
