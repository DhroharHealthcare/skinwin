import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon Facial Treatment | Laser Skin Rejuvenation | SkinWin",
  description: "Refresh your skin and reduce pores, pigmentation and dullness with advanced carbon facial treatment.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
