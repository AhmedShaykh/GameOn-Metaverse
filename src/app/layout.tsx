import { Providers } from "@/Components/ChakraProvider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameOn Metaverse",
  description: "GameOn Metaverse"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
};