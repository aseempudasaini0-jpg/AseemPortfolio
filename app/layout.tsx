import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aseem Pudasaini - UI/UX Designer",
  description:
    "A cinematic dark-theme portfolio for Aseem Pudasaini, a Kathmandu-based UI/UX Designer and AI Student.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/mandala.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/mandala.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/mandala.png",
        type: "image/png",
      },
    ],
    apple: "/mandala.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans antialiased bg-[#030406] text-white">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
