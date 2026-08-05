"use client";

import { ArrowUpRight, Clock3, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const smoothEase = [0.22, 1, 0.36, 1];
const fieldClasses =
  "border-border bg-background-secondary text-text placeholder:text-muted focus:border-primary focus:ring-primary/20 min-h-12 w-full rounded-xl border px-4 text-sm outline-none transition duration-200 focus:ring-4";

export default function ContactPanel({ content }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-24">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.65,
          ease: smoothEase,
        }}
      >
        <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
          {content.label}
        </p>
        <h2
          id="contact-title"
          className="text-text mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
        >
          {content.title}
        </h2>
        <p className="text-text-secondary mt-4 max-w-lg text-sm leading-7 sm:text-base">
          {content.description}
        </p>

        <div className="mt-8 space-y-3">
          <a
            href={`mailto:${content.email}`}
            className="border-text/10 bg-surface/60 hover:border-primary/45 focus-visible:outline-primary-light flex max-w-md items-center gap-3 rounded-2xl border p-4 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <span className="bg-primary/20 text-primary-light flex size-10 shrink-0 items-center justify-center rounded-xl">
              <Mail aria-hidden="true" size={18} />
            </span>
            <span className="min-w-0">
              <span className="text-muted block text-xs">Email us</span>
              <span className="text-text mt-0.5 block truncate text-sm font-semibold">
                {content.email}
              </span>
            </span>
          </a>

          <div className="text-text-secondary flex items-center gap-2 text-sm">
            <Clock3 aria-hidden="true" className="text-info" size={16} />
            {content.responseTime}
          </div>
        </div>
      </motion.div>

      <motion.form
        action={`mailto:${content.email}`}
        method="post"
        encType="text/plain"
        className="border-text/10 bg-surface/70 rounded-3xl border p-5 shadow-2xl sm:p-7"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.7,
          delay: prefersReducedMotion ? 0 : 0.08,
          ease: smoothEase,
        }}
      >
        <input type="hidden" name="subject" value="AKS product inquiry" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="text-text text-sm font-medium"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
              className={`${fieldClasses} mt-2`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="text-text text-sm font-medium"
            >
              Work email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              className={`${fieldClasses} mt-2`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="text-text text-sm font-medium"
            >
              Company
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Company name"
              className={`${fieldClasses} mt-2`}
            />
          </div>

          <div>
            <label
              htmlFor="contact-team-size"
              className="text-text text-sm font-medium"
            >
              Team size
            </label>
            <select
              id="contact-team-size"
              name="team-size"
              defaultValue=""
              className={`${fieldClasses} mt-2`}
            >
              <option value="" disabled>
                Select team size
              </option>
              <option value="1-10">1–10 people</option>
              <option value="11-50">11–50 people</option>
              <option value="51-200">51–200 people</option>
              <option value="201+">201+ people</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label
            htmlFor="contact-message"
            className="text-text text-sm font-medium"
          >
            What would you like to improve?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us about your team and workflow..."
            className={`${fieldClasses} mt-2 resize-y py-3`}
          />
        </div>

        <button
          type="submit"
          className="group bg-primary text-text hover:bg-primary-hover focus-visible:outline-primary-light mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
        >
          Prepare email
          <ArrowUpRight
            aria-hidden="true"
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
        <p className="text-muted mt-3 text-xs leading-5">{content.formNote}</p>
      </motion.form>
    </div>
  );
}
