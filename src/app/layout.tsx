import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrolling } from "./components/ui";

import Navbar from "./components/Navbar";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.className} bg-black text-white font-light max-w-screen-2xl mx-auto`}>
        <SmoothScrolling>
          <div className="md:mx-8 mx-4">
            <Navbar></Navbar>
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
