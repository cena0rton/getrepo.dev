import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-latin"
})



export const metadata: Metadata = {
  title: "Get Repo",
  description: "Ace open source with getRepo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
