"use client";

import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ProductVisual from "./ProductVisual";

const smoothEase = [0.22, 1, 0.36, 1];

export default function ProductShowcaseRow({ product, reverse }) {
  const prefersReducedMotion = useReducedMotion();
  const initialText = prefersReducedMotion ? false : { opacity: 0, x: -48 };
  const initialVisual = prefersReducedMotion
    ? false
    : { opacity: 0, y: -56, scale: 0.97 };

  return (
    <article
      aria-labelledby={`${product.id}-title`}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24"
    >
      <motion.div
        className={reverse ? "lg:order-2" : ""}
        initial={initialText}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.7,
          ease: smoothEase,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-primary-light font-mono text-sm">
            {product.number}
          </span>
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${
              product.aiAccent
                ? "border-accent/40 bg-accent/15 text-accent-light"
                : "border-primary/40 bg-primary/15 text-primary-light"
            }`}
          >
            {product.eyebrow}
          </span>
        </div>

        <h3
          id={`${product.id}-title`}
          className="text-text mt-5 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
        >
          {product.title}
        </h3>
        <p className="text-text-secondary mt-4 max-w-xl text-sm leading-7 sm:text-base">
          {product.description}
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {product.highlights.map((highlight, index) => (
            <motion.li
              key={highlight}
              className="text-text-secondary flex items-center gap-2.5 text-sm"
              initial={prefersReducedMotion ? false : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.45,
                delay: prefersReducedMotion ? 0 : 0.12 + index * 0.08,
                ease: smoothEase,
              }}
            >
              <span className="bg-primary/20 text-primary-light flex size-5 shrink-0 items-center justify-center rounded-full">
                <Check aria-hidden="true" size={12} strokeWidth={2} />
              </span>
              {highlight}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}
        initial={initialVisual}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.8,
          delay: prefersReducedMotion ? 0 : 0.08,
          ease: smoothEase,
        }}
      >
        <ProductVisual product={product} />
      </motion.div>
    </article>
  );
}
