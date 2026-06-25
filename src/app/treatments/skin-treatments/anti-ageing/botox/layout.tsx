import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Botox Treatment | Wrinkle Reduction & Anti-Ageing | SkinWin",
  description: "Smooth fine lines and wrinkles with professional Botox treatment for a refreshed and youthful appearance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
