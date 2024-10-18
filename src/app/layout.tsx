import "@/styles/globals.css";

import type { Viewport } from "next";
import { ThemeProvider } from "@/contexts/theme-context";

import { cn } from "@/utils/cn";

import { inter, lexend, manrope } from "@/styles/fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, lexend.variable, manrope.variable, "bg-bg-primary text-t-primary")}>
      <body className="mx-auto min-h-svh w-full max-w-8xl flex-1">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
