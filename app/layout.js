import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import AutoBreadcrumb from "../components/SEO/AutoBreadcrumb";
import CookieBanner from "../components/CookieBanner";
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

  verification: {
    other: {
      "msvalidate.01": "334230573C4C8DACAC43164555C1CE71",
    },
  },

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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arkvon Group",
  url: "https://www.arkvongroup.com",

  publisher: {
    "@type": "Organization",
    name: "Arkvon Group",
    logo: {
      "@type": "ImageObject",
      url: "https://www.arkvongroup.com/arkvon-logo-mark.png"
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <AutoBreadcrumb />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xx6gv815mm");
  `}
        </Script>
        <GoogleAnalytics gaId="G-NBKVBDQNF0" />
        <CookieBanner />
      </body>
    </html>
  );
}
