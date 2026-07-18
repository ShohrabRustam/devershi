import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shohrab Rustam | Software Developer",
  description: "Portfolio of Shohrab Rustam, a software developer specializing in full-stack development, backend systems, and modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
