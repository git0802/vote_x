import * as React from "react";
import Footer from "@/components/ui/footer";
import TopBar from "../ui/top-bar";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <TopBar />
      <div className="px-6 md:px-20 lg:px-32 bg-neutral text-neutral-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}
