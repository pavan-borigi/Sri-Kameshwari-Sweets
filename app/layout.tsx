import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Sri Kameswari Sweets - Best Sweets & Bakery in Palasa",
  description: "Traditional Indian sweets, freshly baked delights & celebration cakes — crafted daily with love in the heart of Palasa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
