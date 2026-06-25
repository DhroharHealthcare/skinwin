import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eyelid Surgery | Blepharoplasty Procedure | SkinWin",
  description: "Rejuvenate tired-looking eyes and improve eyelid appearance with advanced blepharoplasty procedures.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
