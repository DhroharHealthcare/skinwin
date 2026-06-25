import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Removal Treatment | Advanced Laser Tattoo Removal | SkinWin",
  description: "Safely remove unwanted tattoos with advanced laser tattoo removal treatment and expert care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
