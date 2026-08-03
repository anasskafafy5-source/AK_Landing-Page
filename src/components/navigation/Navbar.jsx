"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ContactUsLink from "@/components/ui/ContactUsLink";
import LogoLink from "@/components/ui/LogoLink";
import { navigationLinks } from "../../../data/navigation";
import NavigationLinks from "./NavigationLinks";

const smoothEase = [0.22, 1, 0.36, 1];
const drawerId = "mobile-navigation-drawer";

const entranceVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  // to know the scoll of the user for desgin of the nav bar
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // if the user does not want an animation
  const prefersReducedMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    // do this code before next frame
    // like told to react do this after the render
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  // responsible for scroll y
  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 12);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  // if expand between small query to large query
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 64rem)");
    const closeAtDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };

    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  // work when is open = true
  useEffect(() => {
    if (!isOpen) return undefined;
    // 1 prevent scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // focus on buttom x
    const focusTimer = window.setTimeout(
      () => closeButtonRef.current?.focus(),
      0,
    );

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeDrawer();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusableElements = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]):not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeDrawer, isOpen]);

  const entranceTransition = (delay = 0) => ({
    duration: prefersReducedMotion ? 0 : 0.45,
    delay: prefersReducedMotion ? 0 : delay,
    ease: smoothEase,
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
          isScrolled
            ? "border-border bg-background-secondary/90 shadow-background/40 shadow-lg backdrop-blur-xl"
            : "bg-background/20 border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center px-3 sm:px-5 lg:px-6">
          {/* desktop */}
          <div className="hidden w-full items-center gap-5 lg:flex">
            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              variants={entranceVariants}
              transition={entranceTransition()}
            >
              <LogoLink />
            </motion.div>

            <nav
              className="flex flex-1 justify-center"
              aria-label="Primary navigation"
            >
              <NavigationLinks prefersReducedMotion={prefersReducedMotion} />
            </nav>

            <motion.div
              initial={prefersReducedMotion ? false : "hidden"}
              animate="visible"
              variants={entranceVariants}
              transition={entranceTransition(
                // time for appearnce
                (navigationLinks.length + 1) * 0.08,
              )}
            >
              <ContactUsLink />
            </motion.div>
          </div>

          {/* for small queries */}
          <div className="flex w-full items-center justify-between lg:hidden">
            <LogoLink compact />
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls={drawerId}
              onClick={() => setIsOpen(true)}
              className="border-border bg-surface/80 text-text hover:border-primary/60 hover:text-primary-light focus-visible:outline-primary inline-flex size-11 items-center justify-center rounded-xl border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <Menu aria-hidden="true" size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {/* if is open */}
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              className="bg-background/75 fixed inset-0 z-40 cursor-default backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
              onClick={closeDrawer}
            />

            <motion.div
              ref={drawerRef}
              id={drawerId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="border-border bg-background-secondary/95 shadow-background/60 fixed inset-y-0 right-0 z-50 flex h-dvh w-11/12 max-w-sm flex-col overflow-y-auto border-l p-5 shadow-2xl backdrop-blur-xl lg:hidden"
              initial={{
                x: prefersReducedMotion ? 0 : "100%",
                opacity: prefersReducedMotion ? 0 : 1,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: prefersReducedMotion ? 0 : "100%",
                opacity: prefersReducedMotion ? 0 : 1,
              }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 0.42,
                ease: smoothEase,
              }}
            >
              <div className="border-border flex items-center justify-between border-b pb-5">
                <LogoLink onClick={closeDrawer} compact />
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                  className="border-border bg-surface text-text hover:border-primary/60 hover:text-primary-light focus-visible:outline-primary inline-flex size-11 items-center justify-center rounded-xl border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  <X aria-hidden="true" size={22} strokeWidth={1.8} />
                </button>
              </div>

              <nav className="flex-1 py-6" aria-label="Mobile navigation">
                <NavigationLinks
                  mobile
                  onNavigate={closeDrawer}
                  prefersReducedMotion={prefersReducedMotion}
                />
              </nav>

              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: prefersReducedMotion
                    ? 0
                    : 0.12 + navigationLinks.length * 0.07,
                  duration: prefersReducedMotion ? 0 : 0.35,
                  ease: smoothEase,
                }}
              >
                <ContactUsLink onClick={closeDrawer} fullWidth />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
