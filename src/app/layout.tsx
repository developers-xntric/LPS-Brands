import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

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
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="ed1af686165b1dda"
        />
        {/* AHREF */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="nqG9qb/T5/n6heppL+R3QQ"
          async
        ></Script>
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
        <GoogleAnalytics gaId="G-VSK43LD025" />
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
        {/* Scroll Depth Tracking */}
        <Script id="lps-scroll-depth" strategy="afterInteractive">
          {`
            window.addEventListener('scroll', () => {
              const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
              if (scrollPercent >= 50 && !window.scrollEventFired) {
                window.scrollEventFired = true;
                if (typeof gtag === 'function') {
                  gtag('event', 'Scroll_Depth_50', {
                    event_category: 'engagement',
                    event_label: '50% Scroll Depth',
                    value: 1
                  });
                  console.log('✅ GA4 Event Fired: Scroll_Depth_50');
                } else {
                  console.warn('⚠️ GA4 not initialized for scroll depth.');
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}