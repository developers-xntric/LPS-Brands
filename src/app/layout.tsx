import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
