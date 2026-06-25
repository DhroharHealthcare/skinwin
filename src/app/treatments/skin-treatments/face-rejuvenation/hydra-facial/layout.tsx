import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hydra Facial Treatment | Skin Hydration & Glow | SkinWin",
  description: "Revitalize your skin with Hydra Facial treatment for hydration, radiance and improved texture.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
