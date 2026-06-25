import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breast Lump Evaluation & Treatment | SkinWin",
  description: "Expert evaluation and treatment options for breast lumps with personalized medical care.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
