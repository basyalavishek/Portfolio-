import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avishek Basyal | Portfolio",
  description:
    "Portfolio of Avishek Basyal, a Web Developer and AI/ML enthusiast. Explore projects, skills, and contact information.",
  keywords: [
    "Portfolio",
    "Avishek",
    "Basyal",
    "Computer Engineering",
    "WRC",
    "AI",
    "ML",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Avishek Basyal",
    "avishek basyal",
    "Western Regional Campus",
  ],
  authors: [{ name: "Avishek Basyal" }],
  openGraph: {
    title: "Avishek Basyal Portfolio",
    description: "Portfolio of Avishek Basyal, explore projects and skills.",
    url: "https://www.avishekbasyal.com.np",
    siteName: "Avishek Basyal Portfolio",
    images: [
      {
        url: "https://www.avishekbasyal.com.np/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avishek Basyal Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishek Basyal | Portfolio",
    description: "Portfolio of Avishek Basyal, explore projects and skills.",
    images: ["https://www.avishekbasyal.com.np/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-300 transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />

          {/*Added JSON-LD for Google to recognize you as a Person */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Avishek Basyal",
                url: "https://www.avishekbasyal.com.np",
                sameAs: [
                  "https://github.com/basyalavishek",
                  "https://linkedin.com/in/avishekbasyal",
                ],
              }),
            }}
          />

          <main className="min-h-screen pt-24">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
