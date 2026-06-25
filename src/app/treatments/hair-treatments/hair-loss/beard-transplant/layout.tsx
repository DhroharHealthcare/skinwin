import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beard Transplant Treatment | Facial Hair Restoration | SkinWin",
  description: "Achieve a fuller and natural-looking beard with advanced beard transplant treatment by experienced specialists.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
