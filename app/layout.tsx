import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Documentação - Baixada Vacinada",
  description: "Documentação completa do projeto Baixada Vacinada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
