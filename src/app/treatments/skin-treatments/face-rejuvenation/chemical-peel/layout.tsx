import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemical Peel Treatment | Skin Rejuvenation | SkinWin",
  description: "Reduce pigmentation, acne marks and dullness with professional chemical peel treatments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
