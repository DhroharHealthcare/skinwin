import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GFC Hair Treatment | Advanced Growth Factor Therapy | SkinWin",
  description: "Experience next-generation growth factor treatment for hair thinning and hair loss.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
