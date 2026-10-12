import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display-sg",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erik-mauricio-portfolio.vercel.app"),
  title: "Erik Mauricio",
  description:
    "Erik Mauricio — CS junior at Cornell University building backend systems, retrieval pipelines, and LLM-integrated products.",
  alternates: {
    canonical: "https://erik-mauricio-portfolio.vercel.app",
  },
  openGraph: {
    title: "Erik Mauricio",
    description:
      "CS junior at Cornell University building backend systems, retrieval pipelines, and LLM-integrated products.",
    url: "https://erik-mauricio-portfolio.vercel.app",
    siteName: "Erik Mauricio",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Erik Mauricio portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erik Mauricio",
    description:
      "CS junior at Cornell University building backend systems, retrieval pipelines, and LLM-integrated products.",
    images: ["/images/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="oxford"
      className={`${inter.className} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
