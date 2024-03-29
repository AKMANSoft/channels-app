import "./globals.css";
import { Metadata } from "next";

import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Provider from "./provider";
import { siteConfig } from "../../config/site";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            <div className="relative flex min-h-screen flex-col overflow-hidden">
              <div className="flex-1">{children}</div>
            </div>
          </Provider>
        </body>
      </html>
    </>
  );
}
