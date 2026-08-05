import { ArrowRight } from "lucide-react";

export default function BuyNowLink({ href = "#pricing", label = "Buy Now" }) {
  return (
    <a
      href={href}
      className="group bg-primary text-text shadow-primary/20 hover:bg-primary-hover focus-visible:outline-primary-light inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold shadow-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
    >
      {label}
      <ArrowRight
        aria-hidden="true"
        size={18}
        strokeWidth={1.8}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </a>
  );
}
