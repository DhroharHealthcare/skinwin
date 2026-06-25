import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dermal Fillers Treatment | Facial Volume Restoration | SkinWin",
  description: "Enhance facial contours and restore lost volume with advanced dermal filler treatments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
