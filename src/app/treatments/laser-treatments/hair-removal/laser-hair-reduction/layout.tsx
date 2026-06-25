import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Hair Reduction | Long-Term Hair Removal | SkinWin",
  description: "Safe and effective laser hair reduction treatment for smooth skin using advanced laser technology.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
