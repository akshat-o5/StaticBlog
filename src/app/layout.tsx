import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MyProfilePic from "./Components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshat's Blog",
  description: "Created by Akshat Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 text-slate-200 ${inter.className}`}>
        <Navbar/>
        <MyProfilePic/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
