import { Metadata } from "next";

export const metadata: Metadata = {
  title: "P-Shot Treatment | Men's Sexual Wellness Therapy | SkinWin",
  description: "Advanced regenerative therapy designed to support men's sexual wellness and performance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
