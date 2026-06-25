import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Transplant Treatment | FUE Hair Restoration | SkinWin",
  description: "Restore your confidence with advanced FUE hair transplant treatment performed by experienced specialists.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
