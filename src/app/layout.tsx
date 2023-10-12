import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Void",
  description:
    "This website is about Illia Kurylenko - Ukraininan Frontend developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Footer />
        <main className="px-40 pt-20 flex flex-col gap-4 items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
