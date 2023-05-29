"use client";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { CacheProvider } from "@chakra-ui/next-js";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "The Netizen",
  description: "A collection of links to helpful resources about The Netizen. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={inter.className}>{children}</body>
      </ChakraProvider>
    </html>
  );
}
