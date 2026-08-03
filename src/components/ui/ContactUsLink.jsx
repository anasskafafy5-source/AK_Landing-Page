export default function ContactUsLink({ onClick, fullWidth = false }) {
  return (
    <a
      href="#contact"
      onClick={onClick}
      className={`bg-primary text-text shadow-primary/15 hover:bg-primary-hover focus-visible:outline-primary-light inline-flex items-center justify-center rounded-xl px-5 font-semibold shadow-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        fullWidth ? "min-h-12 w-full text-base" : "min-h-11 text-sm"
      }`}
    >
      Contact Us
    </a>
  );
}
