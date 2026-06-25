import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mole Removal Treatment | Advanced Skin Lesion Care | SkinWin",
  description: "Safe and effective mole removal procedures performed with advanced techniques and expert dermatology care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
