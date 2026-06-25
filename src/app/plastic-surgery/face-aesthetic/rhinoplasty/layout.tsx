import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rhinoplasty Surgery | Nose Reshaping Procedure | SkinWin",
  description: "Improve facial balance and nasal appearance with personalized rhinoplasty surgery and expert care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
