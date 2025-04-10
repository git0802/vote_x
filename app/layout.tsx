import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Preloader from "@/components/ui/preloader";
import { Toaster } from "sonner";

import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const font = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vote-X",
  description: "Vote-X app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night" suppressHydrationWarning>
      <body className={`${font.className} min-h-screen`}>
        <NextTopLoader color="#fff" showSpinner={false} />
        {children}
        <Toaster position="top-center" duration={2000} />
        <Preloader />
      </body>
    </html>
  );
}
