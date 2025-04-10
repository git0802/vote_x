import { MainLayout } from "@/components/layout/main-layout";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
