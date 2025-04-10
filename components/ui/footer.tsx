"use client";

import Link from "next/link";
import Logo from "./logo";

import { themeChange } from "theme-change";
import { GitFork, HeartHandshake, Star, UserRoundPlus } from "lucide-react";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 px-6 pb-5 mt-14 z-50 relative md:px-20 lg:px-32">
      <div className="grid gap-2 w-full ">
        <div className=" w-full flex justify-between items-center">
          <Logo />
        </div>
        <p className="text-sm text-foreground/80">
          Open-source end-to-end encrypted anonymous polling app
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/git0802/vote_x"
            className="link link-hover flex items-center gap-1"
          >
            <GitFork className="w-4 h-4" />
            Fork
          </Link>
          <Link
            href="https://github.com/git0802/vote_x"
            className="link link-hover flex items-center gap-1"
          >
            <Star className="w-4 h-4" />
            Star
          </Link>
          <Link
            href="https://github.com/git0802/"
            className="link link-hover flex items-center gap-1"
          >
            <UserRoundPlus className="w-4 h-4" />
            Follow
          </Link>
          <Link
            href="https://github.com/sponsors/git0802"
            className="link link-hover flex items-center gap-1"
          >
            <HeartHandshake className="w-4 h-4" />
            Donate
          </Link>
        </div>
      </div>
    </footer>
  );
}
