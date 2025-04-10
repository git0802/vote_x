"use client";

import Logo from "@/components/ui/logo";
import TopLoader from "@/components/ui/toploader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <TopLoader />
      <h1>{isClient ? "This is never prerendered" : "Prerendered"}</h1>
    </>
  );
}
