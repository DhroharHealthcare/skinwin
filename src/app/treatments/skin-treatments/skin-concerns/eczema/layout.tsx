import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eczema Treatment | Dry & Itchy Skin Relief | SkinWin",
  description: "Find relief from eczema symptoms including itching, redness and dry skin with personalized treatment plans.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
