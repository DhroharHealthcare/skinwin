import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tummy Tuck Surgery | Abdominoplasty Procedure | SkinWin",
  description: "Achieve a firmer and flatter abdomen with advanced tummy tuck surgery tailored to your aesthetic goals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
