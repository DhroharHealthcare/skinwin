import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skin & Hair Concerns We Treat | Expert Care | SkinWin",
  description: "Learn about the skin and hair concerns treated at SkinWin, including acne, pigmentation, hair loss, psoriasis, eczema, fungal infections, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
