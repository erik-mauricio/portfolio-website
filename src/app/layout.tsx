import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Erik Mauricio",
  description:
    "Erik Mauricio — CS junior at Cornell University building backend systems, retrieval pipelines, and LLM-integrated products.",
  openGraph: {
    title: "Erik Mauricio",
    description:
      "CS junior at Cornell University building backend systems, retrieval pipelines, and LLM-integrated products.",
    url: "https://erikmauricio.com",
    siteName: "Erik Mauricio",
    type: "website",
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
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
