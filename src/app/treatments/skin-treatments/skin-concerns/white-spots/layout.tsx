import { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Spots Treatment | Vitiligo & Depigmentation Care | SkinWin",
  description: "Expert treatment for white spots and pigmentation disorders with customized dermatology solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
