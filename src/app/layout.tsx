import './globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Tails",
  description: "Pet shop landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-purple-500">{children}</body>
    </html>
  );
}
