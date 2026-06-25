import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breast Reduction Surgery | Breast Reshaping Procedure | SkinWin",
  description: "Reduce discomfort and improve body proportions with advanced breast reduction surgery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
