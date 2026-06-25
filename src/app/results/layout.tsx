import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Treatment Results | SkinWin Clinic",
  description: "Explore real patient before-and-after results for hair, skin, laser, and cosmetic treatments performed by the specialists at SkinWin Clinic.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
