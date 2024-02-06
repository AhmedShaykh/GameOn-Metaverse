import { Providers } from "@/Components/Providers";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

export const metadata = {
  title: "GameOn Metaverse",
  description: "GameOn Metaverse"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#090A1A]">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};