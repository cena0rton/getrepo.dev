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
  title: "Get Repo | Your Comprehensive Guide to Open Source",
  description: "Discover and contribute to trending open source repositories with Get Repo — your comprehensive guide to finding projects, exploring codebases, and making impactful contributions in the global developer community.",
  openGraph: {
    title: "Get Repo | Your Comprehensive Guide to Open Source",
    description:
      "Discover and contribute to trending open source repositories with Get Repo — your comprehensive guide to finding projects, exploring codebases, and making impactful contributions in the global developer community.",
    images: [
      {
        url: "/getrepo.webp",
        alt: "Get Repo logo",
        width: 1200,
        height: 630,
        type: "image/webp",
      },
    ],
    siteName: "Get Repo",
    type: "website",
    locale: "en_US",
    url: "https://getrepo-dev.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    site: "@getrepodev",
    title: "Get Repo | Your Comprehensive Guide to Open Source",
    description:
      "Discover and contribute to trending open source repositories with Get Repo — your comprehensive guide to finding projects, exploring codebases, and making impactful contributions in the global developer community.",
    images: [
      {
        url: "/getrepo.webp",
        alt: "Get Repo logo"
      },
    ],
  },
  metadataBase: new URL("https://getrepo-dev.vercel.app"),
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
