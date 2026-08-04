import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://www.arkvongroup.com"),
  title: {
    default: "Arkvon Group | Building Enduring Indian Businesses",
    template: "%s | Arkvon Group",
  },
  description: "Arkvon Group builds and supports distinctive Indian businesses with long-term thinking, operating discipline, and local insight.",
  keywords: ["Arkvon Group", "Indian business group", "Indian holding company", "AchaarYaar", "Bihar pickles", "purpose-driven businesses"],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "Arkvon Group | Building Enduring Indian Businesses",
    description: "A long-term Indian business group building trusted, independent companies.",
    url: "https://www.arkvongroup.com",
    siteName: "Arkvon Group",
    locale: "en_IN",
    type: "website",
    images: ["/arkvon-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkvon Group | Building Enduring Indian Businesses",
    description: "A long-term Indian business group building trusted, independent companies.",
    images: ["/arkvon-banner.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arkvon Group",
  url: "https://www.arkvongroup.com",
  logo: "https://www.arkvongroup.com/arkvon-logo-mark.png",
  sameAs: [
    "https://www.instagram.com/achaaryaar",
    "https://www.linkedin.com/company/arkvongroup/" // update with your real URL
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

