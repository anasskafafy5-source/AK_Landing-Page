"use client";

import { Quote } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];

export default function TestimonialsGrid({ testimonials }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.article
          key={testimonial.id}
          className="border-text/10 bg-surface/65 flex h-full flex-col rounded-2xl border p-5 shadow-lg sm:p-6"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 38 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            delay: prefersReducedMotion ? 0 : index * 0.1,
            ease: smoothEase,
          }}
        >
          <span className="border-primary/40 bg-primary/15 text-primary-light flex size-10 items-center justify-center rounded-xl border">
            <Quote aria-hidden="true" size={18} />
          </span>

          <blockquote className="text-text-secondary mt-6 flex-1 text-sm leading-7 sm:text-base">
            “{testimonial.quote}”
          </blockquote>

          <footer className="border-border mt-7 flex items-center gap-3 border-t pt-5">
            <span className="border-primary/40 bg-primary/20 text-primary-light flex size-10 shrink-0 items-center justify-center rounded-full border text-xs font-semibold">
              {testimonial.initials}
            </span>
            <div className="min-w-0">
              <cite className="text-text block truncate text-sm font-semibold not-italic">
                {testimonial.name}
              </cite>
              <p className="text-muted mt-0.5 truncate text-xs">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </footer>
        </motion.article>
      ))}
    </div>
  );
}
