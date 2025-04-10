import Link from "next/link";
import Logo from "./logo";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between bg-neutral text-neutral-content w-full p-6 px-6 pb-5 z-50 relative md:px-20 lg:px-32">
      <div className="flex items-center gap-2">
        <Logo />
        <h1 className="text-lg font-bold">Vote</h1>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/signin">
          <button className="btn btn-primary">Sign in</button>
        </Link>
      </div>
    </div>
  );
}
