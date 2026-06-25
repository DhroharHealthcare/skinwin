import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Treatments | Hair Loss & Hair Regrowth Solutions | SkinWin",
  description: "Explore advanced hair treatments at SkinWin, including Hair Transplant, PRP, GFC, Mesotherapy, LLLT, and Medical Hair Loss Therapy for healthier, stronger hair.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
