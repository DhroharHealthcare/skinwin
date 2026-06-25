import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arm Lift Surgery | Brachioplasty Procedure | SkinWin",
  description: "Improve arm contours and remove excess skin with advanced arm lift surgery performed by experienced specialists.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
