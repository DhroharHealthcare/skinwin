import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facelift Surgery | Facial Rejuvenation Procedure | SkinWin",
  description: "Reduce signs of ageing and achieve a youthful appearance with advanced facelift surgery.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
