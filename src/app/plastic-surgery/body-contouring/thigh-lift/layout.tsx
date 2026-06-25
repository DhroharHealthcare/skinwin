import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thigh Lift Surgery | Body Contouring Procedure | SkinWin",
  description: "Reshape and tighten thighs with advanced thigh lift surgery designed to improve body contours.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
