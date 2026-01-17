import Link from "next/link";
import { Shield } from "lucide-react";
import { OptimizedImage } from "../components/OptimizedImage";

const docs = [
  {
    id: "accessibility",
    title: "Relatório de Acessibilidade",
    description:
      "Auditoria WCAG 2.1 AA com implementações realizadas e 15 melhorias em janeiro de 2026",
    icon: Shield,
    href: "/docs/accessibility",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-primary text-primary-foreground border-b border-primary/20">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://criola.org.br/?doing_wp_cron=1768672138.0074019432067871093750"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <OptimizedImage
                src="/criola-logo-branco.png"
                alt="Logo Criola"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </a>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Baixada Vacinada
              </h1>
              <p className="text-primary-foreground/80 text-sm">
                Documentação Técnica
              </p>
            </div>
          </div>
          <p className="text-primary-foreground/90">
            Plataforma de vacinação comunitária com foco em acessibilidade
            digital
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Documentações
          </h2>
          <p className="text-lg text-gray-600">
            Acesse a documentação completa do projeto, incluindo guias técnicos,
            relatórios de auditoria e especificações.
          </p>
        </div>

        {/* Docs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {docs.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <Link
                key={doc.id}
                href={doc.href}
                className="group bg-white rounded-lg border border-gray-200 p-8 hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <IconComponent className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {doc.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-base group-hover:gap-2 transition-all gap-0">
                  Acessar <span className="ml-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-primary/20 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="mb-20 text-white">
            Este projeto é open-source e mantido com propósito comunitário de
            saúde pública.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">Projeto</h3>
              <p className="text-sm text-white/90">
                Plataforma open-source de vacinação com foco em acessibilidade
                digital.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">
                Documentação
              </h3>
              <ul className="text-sm text-white/90 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white hover:underline transition-colors text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/accessibility"
                    className="hover:text-white hover:underline transition-colors text-white"
                  >
                    Acessibilidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg text-white">
                Repositórios
              </h3>
              <ul className="text-sm text-white/90 space-y-2 text-white">
                <li>
                  <a
                    href="https://github.com/baixadavacinada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/baixadavacinada/bv-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors text-white"
                  >
                    Frontend
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 text-sm text-white/90">
            {/* Realizado por */}
            <div className="border-t border-primary/20 pt-6">
              <h4 className="font-bold mb-4">Realizado por</h4>
              <div className="flex items-center justify-start gap-8 flex-wrap">
                <a
                  href="https://criola.org.br/?doing_wp_cron=1768672138.0074019432067871093750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <OptimizedImage
                    src="/criola-logo-branco.png"
                    alt="Logo Criola"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="text-sm text-white">Criola</span>
                </a>
                <div className="text-primary/40">×</div>
                <a
                  href="https://reprograma.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <OptimizedImage
                    src="/reprograma_logo.png"
                    alt="Logo Reprograma"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <span className="text-sm text-white">Reprograma</span>
                </a>
                <a
                  href="https://paulaisdev.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:opacity-80 transition-opacity"
                >
                  <OptimizedImage
                    src="/logo-paula.png"
                    alt="Logo Paula Allemand"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <span className="text-sm text-white">Paula Allemand</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
