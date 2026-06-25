import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pigmentation Treatment | Dark Spots & Melasma Care | SkinWin",
  description: "Treat pigmentation, melasma and uneven skin tone with advanced dermatology treatments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
