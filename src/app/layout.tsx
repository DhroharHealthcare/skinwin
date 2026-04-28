import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/layout/PageLayout";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Skin Win Clinic",
  description: "Premier Skin & Hair Clinic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}>
      <body className={`${montserrat.variable} ${cormorant.variable} h-full`}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
