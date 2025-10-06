import type { Metadata } from "next";
import localFont from "next/font/local";
import "@johwa/styles/globals.css";
import { cn } from "@johwa/lib/utils";
import { ThemeProvider } from "@johwa/providers/theme-provider";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--satoshi",
});

export const metadata: Metadata = {
  title: "Johwa - Next.js",
  description: "An opinionated Next.js starter kit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(satoshi.variable, "antialiased")}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
