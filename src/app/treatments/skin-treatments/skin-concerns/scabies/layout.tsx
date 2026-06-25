import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scabies Treatment | Itching & Skin Infestation Care | SkinWin",
  description: "Treat scabies and severe itching with advanced dermatology care focused on complete recovery and prevention.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
