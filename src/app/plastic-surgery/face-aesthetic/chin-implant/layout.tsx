import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chin Implant Surgery | Facial Profile Enhancement | SkinWin",
  description: "Improve facial proportions and jawline definition with advanced chin implant surgery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
