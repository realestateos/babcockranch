import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babcock Ranch Homeowner Guide | Home Services, Tips & Local Resources",
  description: "Explore the Babcock Ranch Homeowner Guide for home service categories, homeowner tips, local resources, and practical advice for setting up, upgrading, and maintaining your home.",
  keywords: "Babcock Ranch, homeowner guide, home services, Florida, new construction, home maintenance, local services",
  authors: [{ name: "Babcock Ranch Homeowner Guide" }],
  creator: "Babcock Ranch Homeowner Guide",
  publisher: "Babcock Ranch Homeowner Guide",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://babcockranchhomeownerguide.com",
    siteName: "Babcock Ranch Homeowner Guide",
    title: "Babcock Ranch Homeowner Guide | Home Services, Tips & Local Resources",
    description: "Explore the Babcock Ranch Homeowner Guide for home service categories, homeowner tips, local resources, and practical advice for setting up, upgrading, and maintaining your home.",
    images: [
      {
        url: "https://babcockranchhomeownerguide.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Babcock Ranch Homeowner Guide - Home Services, Local Tips & Trusted Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babcock Ranch Homeowner Guide | Home Services, Tips & Local Resources",
    description: "Explore the Babcock Ranch Homeowner Guide for home service categories, homeowner tips, local resources, and practical advice for setting up, upgrading, and maintaining your home.",
    images: ["https://babcockranchhomeownerguide.com/og-image.png"],
  },
  alternates: {
    canonical: "https://babcockranchhomeownerguide.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f766e" />
        
        {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Babcock Ranch Homeowner Guide",
              url: "https://babcockranchhomeownerguide.com",
              description: "A local guide for homeowners in Babcock Ranch to discover home services, helpful tips, community resources, and trusted local recommendations.",
              publisher: {
                "@type": "Organization",
                name: "Babcock Ranch Homeowner Guide",
                url: "https://babcockranchhomeownerguide.com",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white text-slate-800">
        {children}
      </body>
    </html>
  );
}
