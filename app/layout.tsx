import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jane & Smith | Wedding Invitation",
  description: "Join us for our special day as we celebrate our love and begin our journey together",
  keywords: ["wedding", "invitation", "celebration", "rsvp"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancingScript.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
