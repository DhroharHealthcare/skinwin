import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyst Removal Procedure | Safe Surgical Treatment | SkinWin",
  description: "Remove skin cysts safely with expert surgical care and minimal downtime.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
