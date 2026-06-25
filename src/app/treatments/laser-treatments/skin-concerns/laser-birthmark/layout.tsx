import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Birthmark Removal | Advanced Laser Treatment | SkinWin",
  description: "Reduce the appearance of birthmarks with advanced laser treatment designed for effective results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
