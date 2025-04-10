import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="h-8 w-8"
      />
    </Link>
  );
}
