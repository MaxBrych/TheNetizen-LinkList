"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
        <body className={inter.className}>{children}</body>
      </ChakraProvider>
    </html>
  );
}
