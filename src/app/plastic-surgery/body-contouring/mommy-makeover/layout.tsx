import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mommy Makeover Surgery | Body Restoration Procedure | SkinWin",
  description: "Restore your confidence after pregnancy with a customized mommy makeover combining multiple body contouring procedures.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
