import { MainLayout } from "@/components/layout/main-layout";
import { checkAuth } from "@/utils/auth";
import { ReactNode } from "react";

export default async function LayoutPrivate({
  children,
}: {
  children: ReactNode;
}) {
  await checkAuth();

  return <MainLayout>{children}</MainLayout>;
}
