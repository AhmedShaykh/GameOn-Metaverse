import { ThemeProvider } from "@/Components/theme-provider";
import Navbar from "@/Components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gameon Metaverse",
  description: "Gameon Metaverse"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
};