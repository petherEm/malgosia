import type { Metadata } from "next";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Malgorzata Szynkarczuk",
  description:
    "Business development, marketing, and product management, automotive industry, electric vehicles, and renewable energy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
