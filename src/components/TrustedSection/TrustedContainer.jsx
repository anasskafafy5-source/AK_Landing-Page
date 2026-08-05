import { trustedContent } from "../../../data/trusted-by";
import TrustedMarquee from "./TrustedMarquee";

export default function TrustedContainer() {
  return (
    <section
      id="trusted-by"
      aria-labelledby="trusted-title"
      className="border-border bg-background-secondary overflow-hidden border-y py-16 sm:py-20"
    >
      <div className="mx-auto mb-8 max-w-7xl px-5 text-center sm:px-8">
        <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
          {trustedContent.eyebrow}
        </p>
        <h2
          id="trusted-title"
          className="text-text mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          {trustedContent.title}
        </h2>
      </div>

      <TrustedMarquee />
    </section>
  );
}
