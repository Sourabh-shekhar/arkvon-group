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
    default: "Arkvon Group — Rooted in India, Ready for the World",
    template: "%s | Arkvon Group",
  },
  description:
    "Arkvon Group is a diversified holding company building independent, purpose-driven businesses — starting with AchaarYaar, authentic Bihar pickles.",
  openGraph: {
    title: "Arkvon Group",
    description: "A holding company building trusted, independent businesses.",
    url: "https://www.arkvongroup.com",
    siteName: "Arkvon Group",
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
    "https://linkedin.com/company/arkvon-group" // update with your real URL
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