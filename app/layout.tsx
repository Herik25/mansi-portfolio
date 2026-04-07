import type { Metadata } from "next";
import { Luckiest_Guy, Quicksand, Rock_Salt } from "next/font/google";
import "./globals.css";

const rockSalt = Rock_Salt({
  weight: "400",
  variable: "--font-rock-salt",
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
      className={`${rockSalt.variable} ${quicksand.variable} ${luckiestGuy.variable} h-full antialiased`}
    >
      <body className="bg-[#fafafa] text-[#222] min-h-screen">
        {children}
      </body>
    </html>
  );
}
