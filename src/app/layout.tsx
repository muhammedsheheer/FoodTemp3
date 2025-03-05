import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Open_Sans,
  Lora,
  Birthstone,
  Inter,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Nova",
  description: "Nova",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.png", sizes: "11x11" }],
};

const birthstone = Birthstone({
  subsets: ["latin"],
  variable: "--font-birthstone",
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-inter flex min-h-screen antialiased",
          open_sans.variable,
          inter.variable,
          lora.variable,
          birthstone.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
