"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
