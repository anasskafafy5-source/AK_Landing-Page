import { aboutContent, aboutMetrics } from "../../../data/about";
import AboutReveal from "./AboutReveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-border bg-background relative overflow-hidden border-b py-20 sm:py-24 lg:py-32"
    >
      <div className="bg-info/5 absolute top-1/3 -right-32 size-80 rounded-full blur-3xl" />
      <AboutReveal content={aboutContent} metrics={aboutMetrics} />
    </section>
  );
}
