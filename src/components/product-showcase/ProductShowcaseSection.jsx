import { showcaseContent, showcaseProducts } from "../../../data/showcase";
import ProductShowcaseRow from "./ProductShowcaseRow";

export default function ProductShowcaseSection() {
  return (
    <section
      id="product"
      aria-labelledby="product-showcase-title"
      className="border-border bg-background-secondary relative overflow-hidden border-b py-20 sm:py-24 lg:py-32"
    >
      <div className="bg-primary/5 absolute top-1/4 -left-32 size-80 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="max-w-3xl">
          <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
            {showcaseContent.label}
          </p>
          <h2
            id="product-showcase-title"
            className="text-text mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {showcaseContent.title}
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
            {showcaseContent.description}
          </p>
        </header>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24 lg:space-y-32">
          {showcaseProducts.map((product, index) => (
            <ProductShowcaseRow
              key={product.id}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
