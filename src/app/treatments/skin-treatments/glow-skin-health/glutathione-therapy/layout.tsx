import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glutathione Therapy | Skin Brightening Treatment | SkinWin",
  description: "Improve skin radiance and achieve a brighter complexion with professional glutathione therapy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
