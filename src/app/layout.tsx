import Header from "../layouts/header/Header";
import Footer from "../layouts/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shreya Mangade | Portfolio",
  description: "Full Stack Developer Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
