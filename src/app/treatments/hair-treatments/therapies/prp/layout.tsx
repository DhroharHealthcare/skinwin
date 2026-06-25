import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRP Hair Treatment | Natural Hair Growth Therapy | SkinWin",
  description: "Stimulate natural hair growth and reduce hair fall with advanced PRP therapy for hair restoration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
