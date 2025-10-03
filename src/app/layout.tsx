import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "UAE’s Leading Digital Marketing Agency | LPS",
  description: "LPS is a digital marketing agency in Dubai, UAE and provides digital marketing services to brands across the world. Learn more about what we do here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 (gtag.js) - Base Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VSK43LD025"
          strategy="afterInteractive"
        />
        <Script id="gtag-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VSK43LD025', {
              // Optional: Add debug mode for console logging during development
              debug_mode: process.env.NODE_ENV === 'development',
              // Optional: Enable enhanced measurement for automatic events
              'send_page_view': true
            });
          `}
        </Script>
      </head>
      <body className={`antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        {/* Optional: Sample GA4 Event Trigger - Replace with your actual events */}
        <Script id="ga4-events" strategy="afterInteractive">
          {`
            // Example: Log a custom event to console and GA4 on page load
            // Uncomment and customize as needed
            // gtag('event', 'page_load', {
            //   'event_category': 'engagement',
            //   'event_label': 'LPS Homepage',
            //   'value': 1
            // });
            // console.log('GA4 Event Fired: Page Load');
          `}
        </Script>
      </body>
    </html>
  );
}
