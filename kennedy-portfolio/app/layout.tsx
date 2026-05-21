import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kennedy Mwanzia | Full Stack Software Engineer & Blockchain Developer",
  description: "Professional Full Stack Developer & Blockchain Engineer based in Nairobi. Building scalable, high-performance web and decentralized applications.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}