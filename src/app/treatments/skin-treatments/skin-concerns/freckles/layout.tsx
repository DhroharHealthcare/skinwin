import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freckles Treatment | Advanced Pigmentation Care | SkinWin",
  description: "Reduce freckles and uneven pigmentation with advanced dermatology treatments designed for clearer and healthier skin.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
