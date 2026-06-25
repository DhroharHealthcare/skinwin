import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheek Implant Surgery | Facial Contouring Procedure | SkinWin",
  description: "Enhance facial volume and contours with customized cheek implant procedures.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
