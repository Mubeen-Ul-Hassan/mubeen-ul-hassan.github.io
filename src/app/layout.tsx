import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mubeen Ul Hassan",
  description: "Software Engineer And Open Source Contributor",
  creator: "Mubeen Ul Hassan",
  publisher: "Mubeen Ul Hassan",
  keywords: [
    "Mubeen Ul Hassan",
    "Mubeen Software Engineer",
    "mubeendev",
    "mubeen ul hassan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased z-[-2] h-screen bg-[#171717] scroll-smooth`}
      >
        <div className="w-[560px] mx-auto pt-16">{children}</div>
        <Nav />
        <div
          className="fixed top-[-10px] z-40 h-10 w-screen bg-white opacity-90 blur backdrop-blur-lg dark:bg-neutral-900"
          aria-hidden
        />
        <div
          className="fixed bottom-[-10px] z-40 h-10 w-screen bg-white opacity-90 blur backdrop-blur-lg dark:bottom-[-20px] dark:bg-neutral-900"
          aria-hidden
        />
      </body>
    </html>
  );
}
