"use client";

import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, AlertCircle, Zap } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#4C2E97] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao início</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 rounded-lg bg-[#4C2E97]/10 px-4 py-2 mb-4">
              <Shield className="h-5 w-5 text-[#4C2E97]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#4C2E97]">
                Relatório de Acessibilidade
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Acessibilidade Digital
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Conformidade com WCAG 2.1 AA e Lei Brasileira de Inclusão.
              Implementação robusta de acessibilidade desde a arquitetura.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Padrão", value: "WCAG 2.1 AA" },
              { label: "Status", value: "Implementado" },
              { label: "Verificações", value: "8 automáticas" },
              { label: "Atualização", value: "Janeiro 2026" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-gray-200 bg-gray-50 p-4"
              >
                <p className="text-xs font-medium text-gray-500 uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mb-16">
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Sumário Executivo
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              O projeto Baixada Vacinada implementa acessibilidade digital como
              parte central da arquitetura. O sistema inclui validação
              automática em tempo de desenvolvimento e um conjunto de
              utilitários reutilizáveis para garantir conformidade durante a
              implementação.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 font-semibold text-gray-900">
                  Destaques principais:
                </h3>
                <ul className="space-y-2">
                  {[
                    "8 verificações de acessibilidade automatizadas",
                    "6 hooks especializados",
                    "Sistema de anúncios via leitores de tela",
                    "Gerenciamento de foco em modais",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0 text-[#50C36E] mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-semibold text-gray-900">
                  Conformidade:
                </h3>
                <ul className="space-y-2">
                  {[
                    "Políticas de pre-commit via Husky",
                    "Compatível com Axe Core e Storybook",
                    "Localização completa em português",
                    "Integração SSR-safe para Next.js 15+",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle
                        className="h-5 w-5 flex-shrink-0 text-[#50C36E] mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Implementações-Chave
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Validação Automática",
                description:
                  "573 linhas de validação automática via hook useAccessibilityValidation",
                icon: Zap,
                color: "text-[#4C2E97]",
              },
              {
                title: "6 Hooks Especializados",
                description:
                  "Utilitários reutilizáveis para componentes acessíveis",
                icon: Shield,
                color: "text-[#4C2E97]",
              },
              {
                title: "Cobertura Completa",
                description: "Deficiência visual, motora, auditiva e cognitiva",
                icon: CheckCircle,
                color: "text-[#50C36E]",
              },
              {
                title: "Pre-commit Enforcement",
                description:
                  "Husky + lint-staged rejeitam commits sem acessibilidade",
                icon: AlertCircle,
                color: "text-[#FC6E04]",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
                >
                  <Icon
                    className={`h-6 w-6 mb-3 ${feature.color}`}
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* As 8 Verificações */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            As 8 Verificações Automáticas
          </h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Verificação
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Padrão WCAG
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Imagens sem alt text", "1.1.1"],
                  ["Otimização de imagem", "2.5.5"],
                  ["Botões sem labels", "4.1.2"],
                  ["Hierarquia de headings", "1.3.1"],
                  ["Labels de formulário", "1.3.1"],
                  ["Elementos focáveis e ordem", "2.1.1"],
                  ["Landmarks semânticos", "1.3.1"],
                  ["Atributos ARIA válidos", "4.1.2"],
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {idx + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {row[0]}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row[1]}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex items-center gap-1 text-[#50C36E] font-semibold">
                        <CheckCircle className="h-4 w-4" aria-hidden="true" />
                        Ativo
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Melhorias Janeiro 2026 */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Melhorias de Janeiro 2026
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Hierarquia de Cabeçalhos",
                description:
                  "Corrigido múltiplos H1 por página. Validação automática via useAccessibilityValidation() implementada.",
                status: "1 correção",
              },
              {
                title: "Correções Ortográficas",
                description:
                  '"Agente de Saúde" → "Profissional de Saúde", acentuação, preposições e eliminação de anglicismos.',
                status: "6 correções",
              },
              {
                title: "Avisos de Arquivos Externos",
                description:
                  "Diálogo modal com ícone ExternalLink, avisos claros e anúncios via useLiveRegion() para leitores.",
                status: "1 implementação",
              },
              {
                title: "Ícones Decorativos",
                description:
                  'Adicionado aria-hidden="true" em ícones decorativos, Eye/EyeOff, spinners e mapas.',
                status: "7+ correções",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <span className="inline-flex items-center rounded-full bg-[#4C2E97]/10 px-3 py-1 text-xs font-semibold text-[#4C2E97] whitespace-nowrap">
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Resume Box */}
          <div className="mt-8 rounded-lg border border-[#4C2E97]/20 bg-[#4C2E97]/5 p-8">
            <h3 className="mb-6 font-semibold text-gray-900">
              Resumo Total de Melhorias
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "1", label: "Hierarquia H1" },
                { value: "6", label: "Erros Ortográficos" },
                { value: "1", label: "Diálogo PDF" },
                { value: "7+", label: "Ícones Corrigidos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#4C2E97]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#50C36E]/10 px-4 py-2 text-sm font-semibold text-[#50C36E]">
                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                15 melhorias completadas
              </span>
            </p>
          </div>
        </section>

        {/* Checklist */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Checklist para Novos Componentes
          </h2>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
            <p className="mb-6 text-sm text-gray-600">
              Antes do commit, garantir:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Hooks implementados (useAccessibilityValidation, etc)",
                "ARIA labels corretos",
                "Apenas 1 H1 por página",
                "Alt text em todas as imagens",
                "Labels de formulário associados",
                "Foco visível via CSS",
                "Contraste mínimo 4.5:1",
                'Ícones decorativos com aria-hidden="true"',
              ].map((item) => (
                <label key={item} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    disabled
                    className="mt-1"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Referências Técnicas
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "WCAG 2.1",
                description: "Diretrizes de Acessibilidade para Conteúdo Web",
                href: "https://www.w3.org/WAI/WCAG21/quickref/",
              },
              {
                title: "ARIA Authoring Practices",
                description: "Padrões de implementação ARIA",
                href: "https://www.w3.org/WAI/ARIA/apg/",
              },
              {
                title: "Axe Core",
                description: "Engine de testes de acessibilidade",
                href: "https://github.com/dequelabs/axe-core",
              },
              {
                title: "Lei 13.146/2015",
                description: "Lei Brasileira de Inclusão",
                href: "https://www.gov.br/acessibilidade",
              },
            ].map((ref) => (
              <a
                key={ref.title}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md transition-shadow hover:border-[#4C2E97]/30"
              >
                <h3 className="font-semibold text-[#4C2E97]">{ref.title}</h3>
                <p className="mt-1 text-xs text-gray-600">{ref.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <div className="rounded-lg border border-[#4C2E97]/20 bg-[#4C2E97]/5 p-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Conclusão</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Acessibilidade é parte fundamental do projeto Baixada Vacinada.
                A implementação atual garante conformidade com WCAG 2.1 AA e
                legislação brasileira, além de ampliar o alcance e
                responsabilidade social do aplicativo.
              </p>
              <p>
                As melhorias contínuas implementadas em janeiro de 2026
                reafirmam o compromisso com a inclusão digital, corrigindo
                pontos de atrito identificados e garantindo que novos usuários
                tenham a melhor experiência possível.
              </p>
              <p>
                Este relatório comprova que o Baixada Vacinada está preparado
                para atender pessoas com diversos tipos de deficiência de forma
                segura, consistente e autônoma.
              </p>
            </div>
            <div className="mt-6 border-t border-[#4C2E97]/20 pt-6 text-sm text-gray-600">
              <p>
                <span className="font-semibold text-gray-900">
                  Última atualização:
                </span>{" "}
                Janeiro de 2026
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Próxima revisão:
                </span>{" "}
                Abril de 2026
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
