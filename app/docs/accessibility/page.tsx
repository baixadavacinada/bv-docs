import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, AlertCircle } from "lucide-react";
import fs from "fs";
import path from "path";
import { marked } from "marked";

async function getAccessibilityContent() {
  const filePath = path.join(
    process.cwd(),
    "../bv-frontend/src/app/(public)/login/page.tsx",
  );
  // Lê o documento de acessibilidade formatado
  return `# Relatório de Acessibilidade

## Resumo Executivo

Documentação completa da auditoria de acessibilidade WCAG 2.1 AA realizada no projeto Baixada Vacinada, incluindo todas as implementações, correções e melhorias de acessibilidade digital.

**Última atualização:** Janeiro 17, 2026  
**Responsável:** Paula Allemand  
**Status:** Em progresso com melhorias contínuas

---

## 1. Visão Geral

O projeto Baixada Vacinada segue os padrões WCAG 2.1 AA de acessibilidade digital, garantindo que a plataforma seja utilizável por todos, incluindo pessoas com deficiências.

### Escopo da Auditoria
- Frontend (Next.js + React 19 + TypeScript)
- Interface de usuário responsiva
- Componentes acessíveis
- Navegação e formulários
- Multimídia e conteúdo

---

## 2. Implementações Principais

### 2.1 Validação de Acessibilidade Automática
- **Hook \`useAccessibilityValidation\`**: Verifica em tempo real
  - Múltiplos H1 por página (máximo 1)
  - Rótulos de formulário corretos
  - Ordem de headings semântica
  - Atributos alt em imagens

### 2.2 Sistema de Live Region
- **Hook \`useLiveRegion\`**: Anúncios para leitores de tela
  - Modo polite: atualizações não urgentes
  - Modo assertive: alertas importantes
  - Suporte a português (br)

### 2.3 Componentes Acessíveis
- **BvButton**: Suporte a ícones, aria-labels, feedback visual
- **BvCard**: Estrutura semântica com heading correto
- **BvSelect**: Dropdown acessível
- **Forms**: Validação com feedback de erro

---

## 3. Correções Implementadas (Janeiro 2026)

### 3.1 Hierarquia de Headings
✅ **Corrigido:** Múltiplos H1 por página
- Login page: Removido H1 duplicado (H1 apenas no heading principal)
- Todas as páginas agora seguem estrutura H1 → H2 → H3

### 3.2 Erros Ortográficos e Terminologia
✅ **Corrigido:** 6 erros ortográficos
- "Agente de Saúde" → "Profissional de Saúde" (conforme padrão do projeto)
- "Icone" → "Ícone" (acentuação correta)
- "a esquerda" → "à esquerda" (crase)
- "checklabel" → "caixa de seleção" (tradução completa)

### 3.3 Ícones Decorativos
✅ **Melhorado:** aria-hidden em ícones
- Eye/EyeOff em LoginForm: aria-hidden + aria-label no botão
- Loader2 spinners: aria-hidden="true" em todos os botões
- MapPin em LocationPermissionModal: aria-hidden (decorativo)
- FeedbackReportsSection, UserReportsSection: Spinners acessíveis

### 3.4 Avisos de Arquivos Externos (PDF)
✅ **Implementado:** Diálogo de confirmação
- AlertDialog com ExternalLink icon
- Avisos claros: "arquivo externo em PDF"
- Texto: "será aberto em uma nova aba"
- Botões: Cancelar / Abrir arquivo
- Anúncios para leitores de tela

---

## 4. Estrutura de Acessibilidade

### 4.1 Hooks Disponíveis
\`\`\`typescript
// Validação automática
useAccessibilityValidation()

// Anúncios para leitores de tela
const { announceToScreenReader, announceError } = useLiveRegion()

// IDs únicos para seções
const { sectionId, headingId } = useSectionAccessibilityIds('section-name')

// Navegação por teclado
const { isFocused } = useFocusTrap()
\`\`\`

### 4.2 Componentes com A11y Integrada
- Todos os componentes de input possuem labels
- Botões têm aria-labels ou texto descritivo
- Links externos indicados (target="_blank" + rel="noopener noreferrer")
- Cores com contraste suficiente (WCAG AA)

---

## 5. Padrões de Desenvolvimento

### 5.1 Ao Criar Componentes
1. Usar \`useAccessibilityValidation()\` em páginas
2. Adicionar aria-labels para botões/ícones
3. Usar aria-hidden="true" em ícones puramente decorativos
4. Implementar navegação por teclado
5. Testar com leitores de tela

### 5.2 Tradução (Português BR)
- ✅ TODA interface em português
- ✅ Sem exceções (mesmo em variáveis técnicas visíveis ao usuário)
- ✅ "Agente" → "Profissional de Saúde"

### 5.3 Cores e Contraste
- Texto principal: Contraste mínimo 4.5:1
- Componentes interativos: Estados visuais claros
- Modo dark: Implementado com suporte completo

---

## 6. Testes de Acessibilidade

### 6.1 Ferramentas Utilizadas
- ESLint com regras de acessibilidade
- Validação em tempo de compilação
- Teste manual com leitores de tela

### 6.2 Páginas Testadas
- Login / Registro
- Dashboard do morador
- Dashboard do profissional de saúde
- Gestão de UBS
- Materiais educativos

---

## 7. Roadmap Futuro

- [ ] Testes com NVDA/JAWS regulares
- [ ] Validação com automated tools (axe-core, Lighthouse)
- [ ] Melhorias em formulários complexos
- [ ] Suporte a zoom até 200%
- [ ] Testes com usuários com deficiência

---

## 8. Referências

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lucide React Icons](https://lucide.dev/)
- [Next.js Accessibility](https://nextjs.org/learn/foundations/accessibility)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

**Documentação mantida por:** Paula Allemand  
**Última revisão:** 17 de janeiro de 2026`;
}

export default async function AccessibilityPage() {
  const content = await getAccessibilityContent();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft size={20} />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Shield className="text-blue-600" size={28} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Relatório de Acessibilidade
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            WCAG 2.1 AA - Auditoria e Implementações
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          {/* TOC Card */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 border-b border-gray-200 p-6">
            <h2 className="font-semibold text-gray-900 mb-4">
              Informações do Documento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Autor</p>
                <p className="font-medium text-gray-900">Paula Allemand</p>
              </div>
              <div>
                <p className="text-gray-600">Criado em</p>
                <p className="font-medium text-gray-900">
                  17 de janeiro de 2026
                </p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <p className="font-medium text-green-600 flex items-center gap-2">
                  <CheckCircle size={16} /> Ativo
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-sm max-w-none p-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Resumo Executivo
                </h2>
                <p className="text-gray-700">
                  Documentação completa da auditoria de acessibilidade WCAG 2.1
                  AA realizada no projeto Baixada Vacinada, incluindo todas as
                  implementações, correções e melhorias de acessibilidade
                  digital.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                  <p className="text-sm text-blue-900">
                    <strong>Última atualização:</strong> 17 de janeiro de 2026
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Melhorias Implementadas (Janeiro 2026)
                </h2>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Hierarquia de Headings
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Corrigido: múltiplos H1 por página. Todas as páginas
                          agora seguem estrutura H1 → H2 → H3.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Erros Ortográficos (6 correções)
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Corrigido acentuação em ícones, preposições e tradução
                          de termos técnicos para português.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Ícones Decorativos
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Adicionado aria-hidden="true" em ícones puramente
                          decorativos e spinners de loading.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-1 flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Avisos de Arquivos Externos
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Implementado diálogo de confirmação para downloads de
                          PDF com indicador visual e avisos de acessibilidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Padrões de Desenvolvimento
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Usar{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      useAccessibilityValidation()
                    </code>{" "}
                    em todas as páginas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Adicionar aria-labels para botões e ícones
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Usar{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      aria-hidden="true"
                    </code>{" "}
                    em ícones decorativos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    Garantir navegação completa por teclado
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    TODA interface em português (sem exceções)
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Documentação do projeto Baixada Vacinada</p>
          <p className="mt-1">
            <a
              href="https://github.com/baixadavacinada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ver no GitHub →
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-xs text-gray-500 space-y-2">
            <p>
              <strong>Autor:</strong> Paula Allemand
            </p>
            <p>
              <strong>Documento criado em:</strong> 17 de janeiro de 2026
            </p>
            <p>
              <strong>Última atualização:</strong> 17 de janeiro de 2026
            </p>
            <p className="pt-2">
              Documentação do projeto Baixada Vacinada - Plataforma de vacinação
              comunitária com foco em acessibilidade digital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
