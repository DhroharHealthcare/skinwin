import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acne Treatment | Pimple & Acne Scar Solutions | SkinWin",
  description: "Personalized acne treatment for pimples, acne scars and recurring breakouts by experienced dermatologists.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
