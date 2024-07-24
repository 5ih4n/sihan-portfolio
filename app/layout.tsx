import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from 'next/font/google'
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";
import { Footer } from "./components/Footer";

const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });
const source_Sans_3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sihan Li",
  description: "Sihans Digital Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${source_Sans_3.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar/>
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
