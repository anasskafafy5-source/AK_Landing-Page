import { contactContent } from "../../../data/contact";
import ContactPanel from "./ContactPanel";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-border bg-background relative overflow-hidden border-b py-20 sm:py-24 lg:py-32"
    >
      <div className="bg-primary/10 absolute top-1/3 -right-40 size-96 rounded-full blur-3xl" />
      <div className="bg-info/5 absolute bottom-0 -left-32 size-72 rounded-full blur-3xl" />
      <ContactPanel content={contactContent} />
    </section>
  );
}
