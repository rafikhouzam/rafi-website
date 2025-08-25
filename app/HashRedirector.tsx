// app/HashRedirector.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HashRedirector() {
  const router = useRouter();
  useEffect(() => {
    const hash = (window.location.hash || "").toLowerCase();
    const map: Record<string, string> = {
      "#work": "/portfolio",
      "#skills": "/resume",   // or "/"
      "#contact": "/#contact" // will scroll if an element with id="contact" exists on Home
    };
    const dest = map[hash];
    if (dest) router.replace(dest);
  }, [router]);
  return null;
}
