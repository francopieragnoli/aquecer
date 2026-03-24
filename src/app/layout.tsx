import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aquecer | Doe cobertores para quem mais precisa",
  description:
    "Campanha de doação de cobertores para o inverno. Doe via PIX e ajude a aquecer quem mais precisa.",
  openGraph: {
    title: "Aquecer | Doe cobertores para quem mais precisa",
    description:
      "Doe via PIX e ajude a aquecer quem mais precisa neste inverno.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className="bg-amber-50 text-stone-800">{children}</body>
    </html>
  );
}
