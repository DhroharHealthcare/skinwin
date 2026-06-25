import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleft Palate Surgery | Reconstructive Treatment | SkinWin",
  description: "Specialized cleft palate reconstruction procedures designed to improve function and quality of life.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
