import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/_ui/Navbar";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "jeru7 - byte by byte",
  description: "Developer portfolio of Emmanuel Ungab.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col`}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex-1 flex">{children}</main>
        <Toaster position="top-center" theme="dark" />
      </body>
    </html>
  );
}
