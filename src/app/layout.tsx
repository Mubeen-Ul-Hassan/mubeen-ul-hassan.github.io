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
        <div className="w-full sm:w-[560px] mx-auto pt-7 px-3 sm:px-0 sm:pt-16 text-white">
          {children}
        </div>
        <Nav />
        <div
          className="fixed top-[-10px] z-40 h-8 sm:h-10 w-screen opacity-90 blur backdrop-blur-lg dark:bg-neutral-900"
          aria-hidden
        />
        <div
          className="fixed bottom-[-10px] z-40 h-8 sm:h-10 w-screen opacity-90 blur backdrop-blur-lg dark:bottom-[-20px] dark:bg-neutral-900"
          aria-hidden
        />
      </body>
    </html>
  );
}
