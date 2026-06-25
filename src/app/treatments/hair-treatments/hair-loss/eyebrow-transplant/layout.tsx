import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eyebrow Transplant Treatment | Natural Eyebrow Restoration | SkinWin",
  description: "Restore thin or sparse eyebrows with advanced eyebrow transplant treatment for natural-looking results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
