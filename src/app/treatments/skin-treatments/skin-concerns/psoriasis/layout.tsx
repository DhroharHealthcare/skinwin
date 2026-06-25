import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Psoriasis Treatment | Advanced Skin Disease Management | SkinWin",
  description: "Manage psoriasis effectively with expert dermatology care designed to reduce flare-ups and improve skin health.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
