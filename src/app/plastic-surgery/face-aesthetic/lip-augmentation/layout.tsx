import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lip Augmentation Treatment | Fuller Natural-Looking Lips | SkinWin",
  description: "Enhance lip shape and volume with advanced lip augmentation procedures for natural-looking results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
