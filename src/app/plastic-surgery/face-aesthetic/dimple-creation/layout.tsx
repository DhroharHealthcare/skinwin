import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dimple Creation Surgery | Cosmetic Facial Procedure | SkinWin",
  description: "Create natural-looking dimples with a minimally invasive cosmetic facial procedure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
