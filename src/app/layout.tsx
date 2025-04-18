import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rudra Patel",
  description: "Rudra Patel's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
