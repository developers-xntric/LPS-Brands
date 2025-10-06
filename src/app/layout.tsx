import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "UAE’s Leading Digital Marketing Agency | LPS",
  description:
    "LPS is a digital marketing agency in Dubai, UAE and provides digital marketing services to brands across the world. Learn more about what we do here!",
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
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Initialize GA4 with your Measurement ID
            gtag('config', 'G-VSK43LD025', {
              debug_mode: process.env.NODE_ENV === 'development',
              send_page_view: true
            });
          `}
        </Script>

        {/* Optional: Add more SEO / structured data tags here */}
      </head>

      <body className="antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />

        {/* Custom LPS GA4 Event + Console Log */}
        <Script id="lps-ga4-event" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              if (typeof gtag === 'function') {
                gtag('event', 'LPS_Page_Load', {
                  event_category: 'engagement',
                  event_label: 'LPS GA4 Custom Event',
                  value: 1
                });
                console.log('✅ LPS GA4 Event Fired: LPS_Page_Load | GA4 ID: G-VSK43LD025');
              } else {
                console.warn('⚠️ GA4 not initialized yet.');
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
