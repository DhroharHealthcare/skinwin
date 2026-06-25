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
  verification: {
    google: "JMcRZB2hlLUX0IRgr4UtSXH2RLPyDaVfBwbKAs8egLE",
  },
  metadataBase: new URL("https://skinwin.co.in"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}>
      <head>
        {/* <CanonicalLink /> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H286ZDP071"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-H286ZDP071');`}
        </script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://skinwin.co.in/#organization",
                  "name": "SkinWin",
                  "url": "https://skinwin.co.in",
                  "logo": "https://skinwin.co.in/logo.png",
                  "email": "info@skinwin.co.in",
                  "telephone": "+91 97733 11108",
                  "sameAs": [
                    "https://www.instagram.com/skinwinclinicofficial/",
                    "https://www.facebook.com/skinwinclinicofficial/"
                  ]
                },
                {
                  "@type": "MedicalClinic",
                  "@id": "https://skinwin.co.in/#medicalclinic",
                  "name": "SkinWin",
                  "url": "https://skinwin.co.in",
                  "image": "https://skinwin.co.in/logo.png",
                  "telephone": "+91 97733 11108",
                  "email": "info@skinwin.co.in",
                  "priceRange": "₹₹",
                  "medicalSpecialty": [
                    "Dermatology",
                    "Hair Restoration",
                    "Cosmetic Dermatology"
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Dr. Vijay Gakhar"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2nd Floor, Vijay ENT Hospital, St. Stephen Circle, Makarwali Rd, Cheeta Nagar, Abhiyanta Nagar",
                    "addressLocality": "Ajmer",
                    "addressRegion": "Rajasthan",
                    "postalCode": "305004",
                    "addressCountry": "IN"
                  },
                  "hasMap": "https://maps.app.goo.gl/AN9d55ahA1QgZLML8",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday"
                      ],
                      "opens": "10:00",
                      "closes": "20:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": "Sunday",
                      "opens": "10:00",
                      "closes": "19:00"
                    }
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "194",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://skinwin.co.in/#website",
                  "url": "https://skinwin.co.in",
                  "name": "SkinWin",
                  "publisher": {
                    "@id": "https://skinwin.co.in/#organization"
                  },
                  "inLanguage": "en-IN"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} h-full`}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
