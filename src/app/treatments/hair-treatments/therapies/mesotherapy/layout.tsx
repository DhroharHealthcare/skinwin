import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesotherapy Hair Treatment | Hair Growth Therapy | SkinWin",
  description: "Stimulate hair growth and improve scalp health with advanced mesotherapy treatment for hair loss.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
