import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gynecomastia Surgery | Male Chest Reduction | SkinWin",
  description: "Achieve a flatter and more masculine chest contour with advanced gynecomastia surgery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
