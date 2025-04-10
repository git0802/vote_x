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
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
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
