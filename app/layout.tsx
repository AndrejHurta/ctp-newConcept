import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import ViewCanvas from "@/components/ViewCanvas";

const mulish = Mulish({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Portfolio website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} antialiased`}>
          <ViewCanvas/>
        {children}
      </body>
    </html>
  );
}
