import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SkinWin Clinic | Skin, Hair & Cosmetic Specialists",
  description: "Learn about SkinWin Clinic, our expert doctors, advanced treatments and commitment to exceptional skin and hair care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
