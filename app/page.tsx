import Link from "next/link";
import { FileText, Shield, BookOpen } from "lucide-react";

const docs = [
  {
    id: "accessibility",
    title: "Relatório de Acessibilidade",
    description:
      "Audit de acessibilidade WCAG 2.1 AA e implementações realizadas",
    icon: Shield,
    href: "/docs/accessibility",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={24} />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Baixada Vacinada
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Documentação Técnica</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Documentações
          </h2>
          <p className="text-gray-600 mb-8">
            Acesse a documentação completa do projeto, incluindo guias técnicos,
            relatórios de auditoria e especificações.
          </p>
        </div>

        {/* Docs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docs.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <Link
                key={doc.id}
                href={doc.href}
                className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {doc.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{doc.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all gap-0">
                  Acessar <span className="ml-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-3">Projeto</h3>
              <p className="text-sm text-gray-400">
                Plataforma open-source de vacinação comunitária com foco em
                acessibilidade digital.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Documentação</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/accessibility"
                    className="hover:text-white transition-colors"
                  >
                    Acessibilidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Repositórios</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <a
                    href="https://github.com/baixadavacinada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/baixadavacinada/bv-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Frontend
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-xs text-gray-500 space-y-2">
              <p>
                <strong>Autor:</strong> Paula Allemand
              </p>
              <p>
                <strong>Documentação criada em:</strong> Janeiro 17, 2026
              </p>
              <p>
                <strong>Última atualização:</strong> Janeiro 17, 2026
              </p>
              <p className="pt-2">
                Este projeto é open-source e mantido com propósito comunitário
                de saúde pública.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
