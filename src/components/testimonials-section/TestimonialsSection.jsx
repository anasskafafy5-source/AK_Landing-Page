import { testimonials, testimonialsContent } from "../../../data/testimonials";
import TestimonialsGrid from "./TestimonialsGrid";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="border-border bg-background-secondary border-b py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
            {testimonialsContent.label}
          </p>
          <h2
            id="testimonials-title"
            className="text-text mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {testimonialsContent.title}
          </h2>
          <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
            {testimonialsContent.description}
          </p>
        </header>

        <TestimonialsGrid testimonials={testimonials} />
      </div>
    </section>
  );
}
