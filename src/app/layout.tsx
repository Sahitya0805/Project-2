import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnUI — Next-Gen Learning",
  description: "Hardware-accelerated education platform prototype",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Forced dark mode on html tag
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased selection:bg-[var(--accent)] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
