import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scar Revision Surgery | Advanced Scar Correction | SkinWin",
  description: "Improve the appearance of scars with advanced scar revision procedures and reconstructive techniques.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
