import LogoLink from "@/components/ui/LogoLink";
import { navigationLinks } from "../../../data/navigation";
import { footerContent } from "../../../data/footer";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-16">
          <div>
            <LogoLink priority={false} />
            <p className="text-text-secondary mt-5 max-w-sm text-sm leading-6">
              {footerContent.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-text text-sm font-semibold">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary-light focus-visible:outline-primary-light inline-flex min-h-9 items-center rounded-md text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-text text-sm font-semibold">Get in touch</h2>
            <a
              href={`mailto:${footerContent.email}`}
              className="text-muted hover:text-primary-light focus-visible:outline-primary-light mt-4 inline-flex rounded-md text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {footerContent.email}
            </a>
            <a
              href="#contact"
              className="border-border bg-surface text-text-secondary hover:border-primary/50 hover:text-text focus-visible:outline-primary-light mt-5 inline-flex min-h-10 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Contact AKS
            </a>
          </div>
        </div>

        <div className="border-border text-muted mt-10 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {footerContent.copyrightName}. All rights reserved.
          </p>
          <p>Built for focused, modern teams.</p>
        </div>
      </div>
    </footer>
  );
}
