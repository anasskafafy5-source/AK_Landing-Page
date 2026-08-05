"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];

export default function FAQAccordion({ items }) {
  const [openItemId, setOpenItemId] = useState(items[0]?.id ?? null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openItemId === item.id;
        const buttonId = `${item.id}-button`;
        const panelId = `${item.id}-panel`;

        return (
          <motion.article
            key={item.id}
            layout={!prefersReducedMotion}
            className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
              isOpen
                ? "border-primary/45 bg-surface-light/65"
                : "border-text/10 bg-surface/55"
            }`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.5,
              delay: prefersReducedMotion ? 0 : index * 0.06,
              ease: smoothEase,
            }}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenItemId(isOpen ? null : item.id)}
                className="focus-visible:outline-primary-light flex min-h-16 w-full items-center justify-between gap-5 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] sm:px-6"
              >
                <span className="text-text text-sm font-semibold sm:text-base">
                  {item.question}
                </span>
                <motion.span
                  aria-hidden="true"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full border ${
                    isOpen
                      ? "border-primary/50 bg-primary/20 text-primary-light"
                      : "border-border bg-background-secondary text-muted"
                  }`}
                  animate={{ rotate: isOpen && !prefersReducedMotion ? 45 : 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                >
                  <Plus size={16} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.35,
                    ease: smoothEase,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-text-secondary px-5 pb-5 text-sm leading-7 sm:px-6 sm:pb-6">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        );
      })}
    </div>
  );
}
