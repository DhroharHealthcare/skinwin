import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLLT Hair Treatment | Low Level Laser Therapy | SkinWin",
  description: "Promote healthier hair growth with low-level laser therapy designed to strengthen hair follicles.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
