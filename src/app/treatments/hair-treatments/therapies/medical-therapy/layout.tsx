import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Hair Loss Therapy | Non-Surgical Hair Treatment | SkinWin",
  description: "Reduce hair fall and improve hair growth with Medical Hair Loss Therapy at SkinWin. Personalized, non-surgical solutions for healthier, stronger hair.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
