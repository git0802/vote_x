"use client";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader !== null) {
        preloader.style.display = "none";
      }
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="preloader"
      className="flex bg-background items-center justify-center h-full w-full absolute z-50 top-0 left-0 right-0"
    >
      <Loader2 className="animate-spin h-5 w-5" />
    </div>
  );
}
