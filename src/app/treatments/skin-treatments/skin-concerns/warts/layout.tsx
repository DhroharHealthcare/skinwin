import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wart Removal Treatment | Safe & Effective Solutions | SkinWin",
  description: "Remove unwanted warts safely with advanced dermatology treatments designed for effective and lasting results.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
