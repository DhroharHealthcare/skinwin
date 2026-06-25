import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liposuction Surgery | Body Contouring Procedure | SkinWin",
  description: "Remove stubborn fat deposits and reshape body contours with advanced liposuction procedures performed by experienced surgeons.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
