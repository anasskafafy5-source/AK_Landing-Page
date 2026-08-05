import { faqContent, faqItems } from "../../../data/faq";
import FAQAccordion from "./FAQAccordion";

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-border bg-background-secondary border-b py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 xl:gap-24">
        <header className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
            {faqContent.label}
          </p>
          <h2
            id="faq-title"
            className="text-text mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {faqContent.title}
          </h2>
          <p className="text-text-secondary mt-4 max-w-md text-sm leading-6 sm:text-base sm:leading-7">
            {faqContent.description}
          </p>
        </header>

        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
