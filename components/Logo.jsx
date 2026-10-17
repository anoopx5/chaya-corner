import Image from "next/image";

// Main brand logo (the Chaya Corner kulhad tea emblem), served from /public/logo.png.
export default function Logo({ className = "" }) {
  return (
    <a className={`logo ${className}`} href="#top" aria-label="Chaya Corner, back to top">
      <Image src="/logo.png" alt="Chaya Corner" width={1254} height={1254} priority className="logo-img" />
    </a>
  );
}
