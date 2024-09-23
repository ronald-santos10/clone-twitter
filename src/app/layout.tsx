import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z",
  description: "Clone de estudos da rede social X",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
