import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Face & Neck Lift Surgery | Facial Rejuvenation | SkinWin",
  description: "Tighten facial and neck contours with advanced rejuvenation procedures for long-lasting results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
