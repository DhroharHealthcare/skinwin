import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dandruff Treatment | Scalp Health Solutions | SkinWin",
  description: "Get effective dandruff treatment to control itching, flaking and scalp irritation with expert care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
