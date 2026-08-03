import Image from "next/image";

export default function LogoLink({ onClick, compact = false }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="group focus-visible:outline-primary inline-flex shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4"
      aria-label="AKS home"
    >
      <span
        className={`border-border bg-surface group-hover:border-primary/70 group-hover:shadow-primary/10 overflow-hidden rounded-full border transition duration-300 group-hover:shadow-md ${
          compact ? "size-11" : "size-11 lg:size-12"
        }`}
      >
        <Image
          src="/logo.png"
          alt="AKS"
          width={50}
          height={50}
          priority
          className="size-full object-cover"
        />
      </span>
    </a>
  );
}
