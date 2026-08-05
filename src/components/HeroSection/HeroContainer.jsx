"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import BuyNowLink from "@/components/ui/BuyNowLink";
import { heroContent } from "../../../data/hero";
import HeroAnimation from "./HeroAnimation";

const smoothEase = [0.22, 1, 0.36, 1];

export default function HeroContainer() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-14 sm:py-18 lg:py-20"
    >
      <div className="bg-primary/30 absolute inset-x-0 top-0 -z-10 h-px" />
      <div className="bg-primary/10 absolute top-1/4 -left-24 -z-10 size-72 rounded-full blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8 xl:gap-20">
        <motion.div
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          initial={shouldAnimate ? { opacity: 0, x: -48 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: shouldAnimate ? 0.75 : 0, ease: smoothEase }}
        >
          <motion.div
            className="border-accent/30 bg-accent/10 text-accent-light mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wider uppercase"
            initial={shouldAnimate ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldAnimate ? 0.45 : 0,
              delay: 0.12,
              ease: smoothEase,
            }}
          >
            <Sparkles aria-hidden="true" size={14} />
            {heroContent.badge}
          </motion.div>

          <h1
            id="hero-title"
            className="text-text text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {heroContent.title}
          </h1>

          <motion.p
            className="text-text-secondary mx-auto mt-6 max-w-xl text-base leading-7 text-pretty sm:text-lg sm:leading-8 lg:mx-0"
            initial={shouldAnimate ? { opacity: 0, x: -24 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: shouldAnimate ? 0.6 : 0,
              delay: 0.16,
              ease: smoothEase,
            }}
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            initial={shouldAnimate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldAnimate ? 0.55 : 0,
              delay: 0.28,
              ease: smoothEase,
            }}
          >
            <BuyNowLink
              href={heroContent.primaryCta.href}
              label={heroContent.primaryCta.label}
            />
            <a
              href={heroContent.secondaryCta.href}
              className="border-border bg-surface/50 text-text-secondary hover:border-primary/50 hover:bg-surface hover:text-text focus-visible:outline-primary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border px-6 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
            >
              {heroContent.secondaryCta.label}
              <ArrowDown aria-hidden="true" size={17} strokeWidth={1.8} />
            </a>
          </motion.div>
        </motion.div>

        <HeroAnimation />
      </div>
    </section>
  );
}
