import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin Treatments | Advanced Dermatology & Aesthetic Care | SkinWin",
  description: "Discover advanced skin treatments at SkinWin for acne, pigmentation, anti-ageing, skin rejuvenation, and other dermatological concerns with personalized care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
