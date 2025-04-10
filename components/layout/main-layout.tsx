import * as React from "react";
import Footer from "@/components/ui/footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>{children}</div>
      <Footer />
    </div>
  );
}
