import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brow Lift Surgery | Forehead Rejuvenation | SkinWin",
  description: "Enhance facial appearance and reduce forehead sagging with advanced brow lift surgery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
