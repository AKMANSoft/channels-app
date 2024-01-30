"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();

  const error = searchParams.get("error");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Error: {error}</h1>
    </main>
  );
}
