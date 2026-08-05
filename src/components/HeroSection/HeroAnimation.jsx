"use client";

import { Bot, Check, Sparkles, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];
const chartBars = [42, 58, 48, 76, 62, 88, 72, 94, 82];

export default function HeroAnimation() {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;

  return (
    <motion.div
      role="img"
      aria-label="Animated AKS workspace showing live workflow activity and AI insights"
      className="relative mx-auto w-full max-w-2xl py-8 sm:py-10 lg:py-0"
      initial={shouldAnimate ? { opacity: 0, x: 56, scale: 0.96 } : false}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: shouldAnimate ? 0.85 : 0,
        delay: 0.18,
        ease: smoothEase,
      }}
    >
      <motion.div
        aria-hidden="true"
        className="bg-primary/10 absolute inset-x-14 top-1/2 h-2/3 -translate-y-1/2 rounded-full blur-3xl"
        animate={
          shouldAnimate
            ? { opacity: [0.45, 0.8, 0.45], scale: [0.96, 1.04, 0.96] }
            : undefined
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="border-border bg-background-secondary/95 shadow-background/70 relative overflow-hidden rounded-2xl border shadow-2xl"
        animate={shouldAnimate ? { y: [0, -5, 0] } : undefined}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="border-border flex items-center justify-between border-b px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <span className="bg-danger size-2 rounded-full" />
            <span className="bg-warning size-2 rounded-full" />
            <span className="bg-success size-2 rounded-full" />
          </div>
          <div className="border-border bg-surface text-muted flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <motion.span
              className="bg-success size-1.5 rounded-full"
              animate={shouldAnimate ? { opacity: [0.35, 1, 0.35] } : undefined}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Live
          </div>
        </div>

        <div className="grid min-h-80 grid-cols-[3.25rem_1fr] sm:min-h-96 sm:grid-cols-[4rem_1fr]">
          <div className="border-border bg-surface/40 flex flex-col items-center gap-5 border-r py-5">
            <div className="bg-primary text-text flex size-8 items-center justify-center rounded-lg">
              <Sparkles aria-hidden="true" size={16} />
            </div>
            {[0, 1, 2].map((item) => (
              <motion.span
                key={item}
                className="border-border bg-surface relative flex size-8 items-center justify-center rounded-lg border"
                animate={
                  shouldAnimate ? { opacity: [0.45, 1, 0.45] } : undefined
                }
                transition={{
                  duration: 2.8,
                  delay: item * 0.65,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="bg-primary-light size-2 rounded-full" />
              </motion.span>
            ))}
          </div>

          <div className="min-w-0 p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-primary-light text-xs font-medium tracking-widest uppercase">
                  Overview
                </p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-text text-3xl font-semibold sm:text-4xl">
                    76%
                  </span>
                  <span className="text-success mb-1 text-xs">+18%</span>
                </div>
              </div>
              <motion.div
                className="border-accent/30 bg-accent/10 text-accent-light flex size-10 items-center justify-center rounded-xl border"
                animate={
                  shouldAnimate
                    ? { scale: [1, 1.08, 1], opacity: [0.75, 1, 0.75] }
                    : undefined
                }
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Bot aria-hidden="true" size={19} strokeWidth={1.8} />
              </motion.div>
            </div>

            <div className="border-border bg-surface/55 relative h-36 overflow-hidden rounded-xl border p-4 sm:h-44">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-20" />

              <div className="absolute inset-x-4 top-4 bottom-4 flex items-end gap-2 sm:gap-3">
                {chartBars.map((height, index) => (
                  <motion.span
                    key={height}
                    className="bg-primary/55 flex-1 origin-bottom rounded-t-sm"
                    style={{ height: `${height}%` }}
                    animate={
                      shouldAnimate
                        ? {
                            scaleY: [0.7, 1, 0.82, 1],
                            opacity: [0.45, 0.9, 0.6, 0.9],
                          }
                        : undefined
                    }
                    transition={{
                      duration: 3.4,
                      delay: index * 0.14,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              <svg
                aria-hidden="true"
                viewBox="0 0 480 140"
                preserveAspectRatio="none"
                className="text-primary-light absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-visible"
              >
                <motion.path
                  d="M0 112 C56 106 58 82 112 88 S174 56 228 68 S302 26 354 44 S418 18 480 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="0.12 0.08"
                  animate={
                    shouldAnimate ? { strokeDashoffset: [0, -1] } : undefined
                  }
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              <motion.div
                aria-hidden="true"
                className="via-primary/15 absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent to-transparent"
                initial={{ x: "-100%" }}
                animate={
                  shouldAnimate ? { x: ["-100%", "500%"] } : { x: "500%" }
                }
                transition={{ duration: 3.8, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {[0, 1, 2].map((item) => (
                <motion.div
                  key={item}
                  className="border-border bg-surface/60 flex h-12 items-center gap-2 rounded-xl border px-3"
                  animate={
                    shouldAnimate ? { opacity: [0.55, 1, 0.55] } : undefined
                  }
                  transition={{
                    duration: 2.6,
                    delay: item * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="bg-primary/15 text-primary-light flex size-5 shrink-0 items-center justify-center rounded-full">
                    <Check aria-hidden="true" size={12} strokeWidth={2} />
                  </span>
                  <span className="bg-background h-1.5 flex-1 overflow-hidden rounded-full">
                    <motion.span
                      className="bg-primary block h-full origin-left rounded-full"
                      animate={
                        shouldAnimate
                          ? { scaleX: [0.3, 1, 0.65, 1] }
                          : { scaleX: 0.8 }
                      }
                      transition={{
                        duration: 3.2,
                        delay: item * 0.45,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="border-accent/25 bg-surface/95 shadow-background/60 absolute top-5 -left-2 hidden w-36 rounded-xl border p-3 shadow-xl backdrop-blur-md sm:block lg:-left-8"
        initial={shouldAnimate ? { opacity: 0, x: -24 } : false}
        animate={
          shouldAnimate
            ? { opacity: 1, x: 0, y: [0, -5, 0] }
            : { opacity: 1, x: 0, y: 0 }
        }
        transition={{
          opacity: { duration: 0.45, delay: 1.1 },
          x: { duration: 0.45, delay: 1.1, ease: smoothEase },
          y: { duration: 4.8, delay: 1.6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="text-accent-light flex items-center gap-2 text-xs font-medium">
          <Bot aria-hidden="true" size={15} />
          AI sorted
        </div>
        <div className="mt-3 flex gap-1.5">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              className="bg-accent-light size-1.5 rounded-full"
              animate={shouldAnimate ? { opacity: [0.25, 1, 0.25] } : undefined}
              transition={{
                duration: 1.2,
                delay: item * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="border-border bg-surface/95 shadow-background/60 absolute right-2 -bottom-1 hidden w-36 rounded-xl border p-3 shadow-xl backdrop-blur-md sm:block lg:-right-5"
        initial={shouldAnimate ? { opacity: 0, x: 24 } : false}
        animate={
          shouldAnimate
            ? { opacity: 1, x: 0, y: [0, 5, 0] }
            : { opacity: 1, x: 0, y: 0 }
        }
        transition={{
          opacity: { duration: 0.45, delay: 1.3 },
          x: { duration: 0.45, delay: 1.3, ease: smoothEase },
          y: { duration: 5.2, delay: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex items-center justify-between">
          <span className="text-text text-xl font-semibold">+18%</span>
          <TrendingUp aria-hidden="true" size={16} className="text-success" />
        </div>
      </motion.div>
    </motion.div>
  );
}
