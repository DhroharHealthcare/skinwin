import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fungal Infection Treatment | Skin Infection Care | SkinWin",
  description: "Get effective treatment for fungal skin infections, itching and recurring skin irritation with expert care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
