import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breast Augmentation Surgery | Breast Enhancement | SkinWin",
  description: "Enhance breast size and shape with advanced breast augmentation procedures tailored to your goals.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
