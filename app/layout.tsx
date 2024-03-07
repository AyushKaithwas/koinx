import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/internal/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KoinX",
  description:
    "A cutting-edge financial technology platform specializing in simplifying the complex world of cryptocurrency taxation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="bg-white" />
        {children}
      </body>
    </html>
  );
}
