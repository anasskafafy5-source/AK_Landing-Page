import { pricingContent, pricingPlans } from "../../../data/pricing";
import PricingGrid from "./PricingGrid";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="border-border bg-background relative overflow-hidden border-b py-20 sm:py-24 lg:py-32"
    >
      <div className="bg-primary/5 absolute top-1/3 -left-32 size-80 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
            {pricingContent.label}
          </p>
          <h2
            id="pricing-title"
            className="text-text mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {pricingContent.title}
          </h2>
          <p className="text-text-secondary mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
            {pricingContent.description}
          </p>
        </header>

        <PricingGrid plans={pricingPlans} />

        <p className="text-muted mt-7 text-center text-xs">
          {pricingContent.billingNote}
        </p>
      </div>
    </section>
  );
}
