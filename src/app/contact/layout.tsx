import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SkinWin Clinic | Book Your Consultation",
  description: "Contact SkinWin Clinic for appointments, consultations and expert skin, hair and cosmetic treatments.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
