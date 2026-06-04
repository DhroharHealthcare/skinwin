"use client";

import { usePathname } from "next/navigation";

export default function CanonicalLink() {
  const pathname = usePathname();
  const canonicalUrl = `https://skinwin.co.in${pathname === "/" ? "" : pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
