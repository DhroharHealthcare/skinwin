import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O-Shot Treatment | Women's Sexual Wellness Therapy | SkinWin",
  description: "Regenerative treatment designed to support women's intimate wellness and confidence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
