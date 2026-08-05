"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];

export default function PricingGrid({ plans }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-12 grid items-stretch gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
      {plans.map((plan, index) => (
        <motion.article
          key={plan.id}
          aria-labelledby={`${plan.id}-title`}
          className={`relative flex h-full flex-col rounded-2xl border p-5 sm:p-6 ${
            plan.featured
              ? "border-accent/50 bg-surface-light/75 shadow-accent/10 shadow-2xl lg:-translate-y-2"
              : "border-text/10 bg-surface/65 shadow-lg"
          }`}
          initial={
            prefersReducedMotion ? false : { opacity: 0, y: 34, scale: 0.985 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.58,
            delay: prefersReducedMotion ? 0 : index * 0.1,
            ease: smoothEase,
          }}
        >
          {plan.badge && (
            <span className="border-accent/50 bg-accent/20 text-accent-light absolute top-0 right-5 -translate-y-1/2 rounded-full border px-3 py-1 text-xs font-semibold">
              {plan.badge}
            </span>
          )}

          <div>
            <h3
              id={`${plan.id}-title`}
              className="text-text text-xl font-semibold"
            >
              {plan.name}
            </h3>
            <p className="text-muted mt-3 min-h-12 text-sm leading-6">
              {plan.description}
            </p>
          </div>

          <div className="border-border mt-6 border-y py-5">
            <p className="text-text text-3xl font-semibold tracking-tight sm:text-4xl">
              {plan.price}
            </p>
            <p className="text-muted mt-2 text-xs">{plan.period}</p>
          </div>

          <ul className="mt-6 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="text-text-secondary flex items-start gap-2.5 text-sm leading-6"
              >
                <span className="bg-primary/20 text-primary-light mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                  <Check aria-hidden="true" size={12} strokeWidth={2} />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href={plan.href}
            className={`group focus-visible:outline-primary-light mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              plan.featured
                ? "bg-primary text-text hover:bg-primary-hover"
                : "border-border bg-background-secondary text-text-secondary hover:border-primary/50 hover:text-text"
            }`}
          >
            {plan.cta}
            <ArrowRight
              aria-hidden="true"
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </motion.article>
      ))}
    </div>
  );
}
