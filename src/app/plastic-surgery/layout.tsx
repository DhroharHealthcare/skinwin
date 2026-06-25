import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plastic Surgery Procedures | Cosmetic & Reconstructive Care | SkinWin",
  description: "Explore cosmetic and reconstructive plastic surgery procedures with patient-focused care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
