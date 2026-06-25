import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HIFU Treatment | Non-Surgical Skin Tightening | SkinWin",
  description: "Lift and tighten your skin naturally with advanced HIFU treatment for facial rejuvenation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
