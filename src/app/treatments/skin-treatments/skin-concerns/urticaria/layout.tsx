import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urticaria Treatment | Hives & Allergy Skin Care | SkinWin",
  description: "Get expert diagnosis and treatment for urticaria, hives and recurring allergic skin reactions with personalized care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
