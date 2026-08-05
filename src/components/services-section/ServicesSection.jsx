"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { useReducedMotion, useScroll, useSpring } from "motion/react";
import { services, servicesContent } from "../../../data/services";
import ServiceScene, { MobileServiceScene } from "./ServiceScene";
import ServiceVisual from "./ServiceVisual";
import ServicesProgress from "./ServicesProgress";

function ServiceCopy({ service }) {
  return (
    <div className="bg-background flex h-full flex-col justify-center py-2 lg:py-0">
      <div className="flex items-center justify-between gap-4">
        <span className="text-primary-light font-mono text-sm">
          {service.number}
        </span>
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${
            service.aiAccent
              ? "border-accent/30 bg-accent/10 text-accent-light"
              : "border-primary/30 bg-primary/10 text-primary-light"
          }`}
        >
          {service.accentLabel}
        </span>
      </div>
      <h3 className="text-text mt-3 text-2xl font-semibold tracking-tight sm:text-3xl xl:mt-4 xl:text-4xl">
        {service.title}
      </h3>
      <p className="text-text-secondary mt-2 max-w-lg text-sm leading-6 sm:mt-3 xl:text-base xl:leading-7">
        {service.shortDescription}
      </p>
      <ul className="mt-3 grid gap-2 sm:mt-5 sm:grid-cols-2 lg:grid-cols-1 lg:space-y-0 xl:gap-2.5">
        {service.benefits.map((benefit) => (
          <li
            key={benefit}
            className="text-text-secondary flex items-center gap-2.5 text-sm"
          >
            <span className="bg-primary/10 text-primary-light flex size-5 shrink-0 items-center justify-center rounded-full">
              <Check aria-hidden="true" size={12} strokeWidth={2} />
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionIntroduction() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 sm:px-8 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20">
      <p className="text-primary-light text-xs font-semibold tracking-widest uppercase">
        {servicesContent.label}
      </p>
      <h2
        id="services-title"
        className="text-text mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {servicesContent.title}
      </h2>
      <p className="text-text-secondary mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7">
        {servicesContent.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const sectionTrackRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionTrackRef,
    offset: ["start start", "end end"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.28,
    restDelta: 0.001,
  });

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-border bg-background relative border-b"
    >
      <SectionIntroduction />

      {!prefersReducedMotion && (
        <div ref={sectionTrackRef} className="relative h-[420svh] lg:h-[420vh]">
          <div className="sticky top-0 h-svh overflow-hidden">
            <div className="bg-primary/5 absolute top-1/3 -right-32 size-96 rounded-full blur-3xl" />
            <div className="mx-auto flex h-full max-w-7xl flex-col px-5 pt-20 pb-5 sm:px-8 sm:pt-28 sm:pb-8 lg:grid lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10 lg:pt-24 lg:pb-10 xl:gap-16">
              <div className="flex min-h-0 flex-1 flex-col lg:block">
                <div className="relative h-52 shrink-0 overflow-hidden sm:h-60 lg:h-72">
                  {services.map((service, index) => (
                    <ServiceScene
                      key={service.id}
                      index={index}
                      total={services.length}
                      scrollProgress={smoothScrollProgress}
                    >
                      <ServiceCopy service={service} />
                    </ServiceScene>
                  ))}
                </div>

                <ServicesProgress
                  services={services}
                  scrollProgress={smoothScrollProgress}
                />
              </div>

              <div className="relative mt-4 h-[38svh] min-h-52 min-w-0 shrink-0 overflow-hidden rounded-3xl sm:mt-5 sm:max-h-80 lg:mt-0 lg:h-[30rem] lg:max-h-none xl:h-[34rem]">
                {services.map((service, index) => (
                  <ServiceScene
                    key={service.id}
                    index={index}
                    total={services.length}
                    scrollProgress={smoothScrollProgress}
                  >
                    <ServiceVisual service={service} />
                  </ServiceScene>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 ${prefersReducedMotion ? "block" : "hidden"}`}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <MobileServiceScene
              key={service.id}
              service={service}
              reducedMotion={prefersReducedMotion}
            >
              <ServiceVisual service={service} />
            </MobileServiceScene>
          ))}
        </div>
      </div>
    </section>
  );
}
