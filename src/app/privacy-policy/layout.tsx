import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SkinWin",
  description: "Read the SkinWin Privacy Policy to understand how we collect, use, store, and protect your personal information when using our website and services.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
