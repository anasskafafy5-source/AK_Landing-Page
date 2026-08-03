import {
  BadgeDollarSign,
  Building2,
  CircleHelp,
  Home,
  LayoutDashboard,
  MessageSquareQuote,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import { navigationLinks } from "../../../data/navigation";

const smoothEase = [0.22, 1, 0.36, 1];

const entranceVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

const navigationIcons = {
  "#home": Home,
  "#services": Workflow,
  "#product": LayoutDashboard,
  "#about": Building2,
  "#testimonials": MessageSquareQuote,
  "#pricing": BadgeDollarSign,
  "#faq": CircleHelp,
};

function DesktopLink({ link }) {
  return (
    <a
      href={link.href}
      className="group text-text-secondary hover:text-primary-light focus-visible:outline-primary relative flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {link.label}
      <span className="bg-primary absolute inset-x-3 bottom-1.5 h-px origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
    </a>
  );
}

export default function NavigationLinks({
  mobile = false,
  onNavigate,
  prefersReducedMotion = false,
}) {
  if (mobile) {
    return (
      <motion.ul
        className="space-y-1"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: prefersReducedMotion ? 0 : 0.12,
              staggerChildren: prefersReducedMotion ? 0 : 0.07,
            },
          },
        }}
      >
        {navigationLinks.map((link) => {
          const Icon = navigationIcons[link.href];

          return (
            <motion.li
              key={link.href}
              variants={{
                hidden: {
                  opacity: 0,
                  x: prefersReducedMotion ? 0 : 16,
                },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.3,
                ease: smoothEase,
              }}
            >
              <a
                href={link.href}
                onClick={onNavigate}
                className="group text-text-secondary hover:bg-surface hover:text-primary-light focus-visible:outline-primary flex min-h-12 items-center gap-3 rounded-xl px-4 text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {Icon && (
                  <Icon
                    aria-hidden="true"
                    size={19}
                    strokeWidth={1.8}
                    className="text-muted group-hover:text-primary-light shrink-0 transition-colors duration-200"
                  />
                )}
                <span>{link.label}</span>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    );
  }

  return (
    <ul className="flex items-center gap-1">
      {navigationLinks.map((link, index) => (
        <motion.li
          key={link.href}
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={entranceVariants}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.45,
            delay: prefersReducedMotion ? 0 : (index + 1) * 0.08,
            ease: smoothEase,
          }}
        >
          <DesktopLink link={link} />
        </motion.li>
      ))}
    </ul>
  );
}
