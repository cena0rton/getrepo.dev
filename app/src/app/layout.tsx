import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-latin"
})



export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/git-branch.svg", type: "image/svg+xml" },
    ],
  },
  title: "Get Repo",
  description: "Discover and contribute to trending open source repositories with Get Repo — your comprehensive guide to finding projects, exploring codebases, and making impactful contributions in the global developer community.",
  openGraph: {
    images: [
      {
        url: "/getrepo.webp",
        alt: "Get Repo logo",
        width: 1200,
        height: 630,
        type: "image/webp"
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${inter.variable} antialiased bg-white dark:bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
