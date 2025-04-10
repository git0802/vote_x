import { MainLayout } from "@/components/layout/main-layout";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      <div className="flex flex-col items-center mx-auto pt-20  px-6 md:px-20 lg:px-32">
        <Link href="/" className="mr-auto">
          <button className="btn btn-outline btn-xs">
            <ChevronLeftIcon className="w-4 h-4" /> Go back
          </button>
        </Link>
        <div>{children}</div>
      </div>
    </MainLayout>
  );
}
