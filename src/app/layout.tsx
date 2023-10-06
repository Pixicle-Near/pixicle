import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import MarketPlaceProvider from "@/context/MarketStore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixicle",
  description: "An NFT Marketplace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MarketPlaceProvider>
          <Providers>{children}</Providers>
        </MarketPlaceProvider>
      </body>
    </html>
  );
}
