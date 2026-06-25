import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin, Hair & Cosmetic Treatments | SkinWin",
  description: "Explore advanced skin, hair, laser and cosmetic treatments designed for long-term results and patient satisfaction.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
