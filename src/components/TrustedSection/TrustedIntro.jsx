"use client";

import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];

export default function TrustedIntro({ content }) {
  const prefersReducedMotion = useReducedMotion();
  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -42 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="mx-auto mb-8 max-w-7xl px-5 text-center sm:px-8"
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.1,
          },
        },
      }}
    >
      <motion.p
        variants={itemVariants}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.5,
          ease: smoothEase,
        }}
        className="text-primary-light text-xs font-semibold tracking-widest uppercase"
      >
        {content.eyebrow}
      </motion.p>
      <motion.h2
        id="trusted-title"
        variants={itemVariants}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.65,
          ease: smoothEase,
        }}
        className="text-text mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        {content.title}
      </motion.h2>
    </motion.div>
  );
}
