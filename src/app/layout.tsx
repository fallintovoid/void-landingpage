import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/voidlogo.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="px-5 pt-20 flex flex-col gap-4 mb-10 md:px-40">
          {children}
        </main>
      </body>
    </html>
  );
}
