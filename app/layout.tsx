import type { Metadata } from "next";
import { Fredoka, Bangers, Luckiest_Guy, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  variable: "--font-luckiest-guy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansi | UI/UX Designer",
  description: "Doodly portfolio of Mansi, a passionate UI/UX Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable} ${luckiestGuy.variable} h-full antialiased`}
    >
      <body className="font-fredoka bg-[#fafafa] text-[#222] min-h-screen">
        {children}
      </body>
    </html>
  );
}
