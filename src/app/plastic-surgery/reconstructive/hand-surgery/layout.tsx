import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hand Surgery | Reconstructive & Functional Procedures | SkinWin",
  description: "Advanced hand surgery procedures for injury repair, reconstruction and improved function.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
