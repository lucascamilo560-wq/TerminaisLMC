const ALPHA_PRO_URL = 'https://play.google.com/store/apps/details?id=com.lmc.alphaproterminal'
const DIVIDE_AI_URL = 'https://play.google.com/store/apps/details?id=com.divideai.app'
const INSTAGRAM_URL = 'https://www.instagram.com/terminaislmc/'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function App() {
  return (
    <div className="app">
      {/* ══════════════ 1. HERO ══════════════ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand-mark">
            <span className="brand-lmc">LMC</span>
            <span className="brand-sep" aria-hidden="true" />
            <span className="brand-name">Terminais LMC</span>
          </div>

          <h1 className="hero-title">
            Ferramentas digitais<br className="br-desktop" /> para controle real.
          </h1>

          <p className="hero-subtitle">
            Apps para quem não vive no improviso.
          </p>

          <p className="hero-support">
            Escolha o que você precisa controlar hoje.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('section-alpha')}
              className="btn btn-primary"
            >
              Trading e operações
            </button>
            <button
              onClick={() => scrollToSection('section-divide')}
              className="btn btn-secondary"
            >
              Contas e despesas
            </button>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </header>

      {/* ══════════════ 2. MANIFESTO ══════════════ */}
      <section className="manifesto-section">
        <div className="manifesto-line" aria-hidden="true" />
        <h2 className="manifesto-title">Nem tudo é o que parece.</h2>
        <blockquote className="manifesto-quote">
          Por trás de uma operação existe risco.<br />
          Por trás de uma conta dividida existe relação.<br />
          Por trás da desorganização existe custo.
        </blockquote>
        <p className="manifesto-text">
          A Terminais LMC cria ferramentas para transformar ruído em clareza.
        </p>
        <div className="manifesto-line" aria-hidden="true" />
      </section>

      {/* ══════════════ 3. ALPHA PRO — VISÃO GERAL ══════════════ */}
      <section className="product-section" id="section-alpha">
        <div className="product-inner">
          <h2 className="product-title product-title--alpha">Alpha Pro Terminal</h2>
          <p className="product-call">
            Teste sua estratégia antes de colocar dinheiro real em risco.
          </p>
          <div className="product-body">
            <p>
              Para traders que querem testar, organizar e acompanhar suas operações com mais controle.
            </p>
            <p>
              O Alpha Pro não foi criado para prometer lucro.<br />
              Ele foi criado para ajudar o trader a sair do improviso.
            </p>
            <p>
              Com ele, você pode começar no simulador, testar operações sem dinheiro real, acompanhar posições, organizar robôs, analisar histórico e, quando estiver pronto, evoluir para recursos de operação real com mais estrutura.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 4. ALPHA PRO — COMO FUNCIONA ══════════════ */}
      <section className="feature-section">
        <div className="feature-inner">
          <div className="feature-cards">
            <div className="feature-card feature-card--alpha">
              <h3 className="feature-card__title">Treine sem dinheiro real</h3>
              <p className="feature-card__text">
                Use o simulador para praticar operações, testar estratégias e entender melhor sua tomada de decisão antes de arriscar capital real.
              </p>
            </div>
            <div className="feature-card feature-card--alpha">
              <h3 className="feature-card__title">Crie e teste estratégias</h3>
              <p className="feature-card__text">
                Use o Alpha Forge para organizar ideias, robôs e regras operacionais. Saia do impulso e comece a trabalhar com lógica, teste e disciplina.
              </p>
            </div>
            <div className="feature-card feature-card--alpha">
              <h3 className="feature-card__title">Acompanhe operações</h3>
              <p className="feature-card__text">
                Veja posições abertas, histórico, ordens e informações importantes para entender o que aconteceu antes, durante e depois da operação.
              </p>
            </div>
            <div className="feature-card feature-card--alpha">
              <h3 className="feature-card__title">Conecte corretoras compatíveis</h3>
              <p className="feature-card__text">
                Nos planos avançados, acesse áreas voltadas à operação real, integração com corretoras e configurações de trading.
              </p>
            </div>
            <div className="feature-card feature-card--alpha">
              <h3 className="feature-card__title">Amplie sua visão</h3>
              <p className="feature-card__text">
                No Alpha Pró, recursos como Scanner Global e Data Hub Ômega ajudam a acompanhar mais informações e ampliar a visão operacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 5. ALPHA PRO — PARA QUEM É ══════════════ */}
      <section className="audience-section">
        <div className="audience-inner">
          <div className="audience-box audience-box--alpha">
            <p>
              O Alpha Pro é para quem quer praticar, testar robôs, acompanhar risco, organizar estratégias e operar com mais disciplina.
            </p>
            <p>
              Não é para quem procura promessa de lucro.<br />
              É para quem entende que controle vem antes de resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 6. ALPHA PRO — PLANOS ══════════════ */}
      <section className="plans-section">
        <div className="plans-inner">
          <div className="plan-blocks">
            <div className="plan-block">
              <h3 className="plan-block__title">Essencial</h3>
              <ul className="plan-block__list">
                <li>Simulador</li>
                <li>Alpha Forge</li>
                <li>Histórico</li>
                <li>Ordens abertas</li>
                <li>Conformidade</li>
                <li>Ajustes</li>
              </ul>
            </div>
            <div className="plan-block">
              <h3 className="plan-block__title">Avançado</h3>
              <ul className="plan-block__list">
                <li>Real Core</li>
                <li>Conexões</li>
                <li>Configuração de Trading</li>
                <li>Comunidade</li>
                <li>Assistente IA</li>
                <li>Recursos de operação real</li>
              </ul>
            </div>
            <div className="plan-block">
              <h3 className="plan-block__title">Alpha Pró</h3>
              <ul className="plan-block__list">
                <li>Tudo do Avançado</li>
                <li>Scanner Global</li>
                <li>Data Hub Ômega</li>
                <li>Experiência sem anúncios</li>
                <li>Bright HFT em breve</li>
              </ul>
            </div>
          </div>

          <p className="product-disclaimer">
            ⚠ Operar envolve riscos. O app não garante resultados e não substitui conhecimento, análise e responsabilidade do trader.
          </p>

          <a
            href={ALPHA_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-full"
          >
            Baixar Alpha Pro Terminal
          </a>
        </div>
      </section>

      {/* ══════════════ 7. DIVIDE AÍ — VISÃO GERAL ══════════════ */}
      <section className="product-section product-section--divide" id="section-divide">
        <div className="product-inner">
          <h2 className="product-title product-title--divide">Divide Aí</h2>
          <p className="product-call">
            Conta compartilhada sem clareza vira cobrança, esquecimento e desgaste.
          </p>
          <div className="product-body">
            <p>Para quem divide contas e cansou da confusão.</p>
            <p>
              O Divide Aí foi criado para organizar dinheiro pessoal e despesas compartilhadas com mais clareza.
            </p>
            <p>
              Porque uma conta mal combinada não vira só número.<br />
              Vira cobrança chata.<br />
              Vira esquecimento.<br />
              Vira desconforto.<br />
              Vira discussão.
            </p>
            <p>
              Com o Divide Aí, você pode acompanhar valores a pagar, valores a receber, parcelas, vencimentos, divisões e compromissos financeiros em um só lugar.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 8. DIVIDE AÍ — COMO FUNCIONA ══════════════ */}
      <section className="feature-section feature-section--divide">
        <div className="feature-inner">
          <div className="feature-cards">
            <div className="feature-card feature-card--divide">
              <h3 className="feature-card__title">Veja sua situação com mais clareza</h3>
              <p className="feature-card__text">
                Use o Dashboard para acompanhar sua organização financeira e entender o que precisa de atenção.
              </p>
            </div>
            <div className="feature-card feature-card--divide">
              <h3 className="feature-card__title">Organize seu dinheiro pessoal</h3>
              <p className="feature-card__text">
                Use o Controle Pessoal para acompanhar compromissos, valores, prazos e sua rotina financeira sem depender apenas da memória.
              </p>
            </div>
            <div className="feature-card feature-card--divide">
              <h3 className="feature-card__title">Crie divisões compartilhadas</h3>
              <p className="feature-card__text">
                Organize contas com outras pessoas, acompanhe quem participa, quem deve, quem pagou e o que ainda precisa ser resolvido.
              </p>
            </div>
            <div className="feature-card feature-card--divide">
              <h3 className="feature-card__title">Conecte pessoas</h3>
              <p className="feature-card__text">
                Use conexões para organizar despesas e compromissos com quem divide contas com você.
              </p>
            </div>
            <div className="feature-card feature-card--divide">
              <h3 className="feature-card__title">Acompanhe vencimentos</h3>
              <p className="feature-card__text">
                Use a agenda financeira para não perder prazos importantes e evitar esquecimentos.
              </p>
            </div>
            <div className="feature-card feature-card--divide">
              <h3 className="feature-card__title">Exporte informações</h3>
              <p className="feature-card__text">
                No Premium, exporte dados do Controle Pessoal em PDF para guardar, revisar ou compartilhar quando necessário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 9. DIVIDE AÍ — PARA QUEM É ══════════════ */}
      <section className="audience-section">
        <div className="audience-inner">
          <div className="audience-box audience-box--divide">
            <p>
              O Divide Aí é para casais, famílias, amigos, colegas de casa, grupos de viagem e qualquer pessoa que divide despesas e quer menos confusão.
            </p>
            <p>
              Ele ajuda a transformar conta espalhada em organização visível.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ 10. DIVIDE AÍ — ACESSO E PREMIUM ══════════════ */}
      <section className="plans-section plans-section--divide">
        <div className="plans-inner">
          <div className="plan-blocks">
            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Uso inicial</h3>
              <ul className="plan-block__list">
                <li>Dashboard</li>
                <li>Controle Pessoal</li>
                <li>Organização básica financeira</li>
                <li>Perfil</li>
              </ul>
            </div>
            <div className="plan-block plan-block--divide">
              <h3 className="plan-block__title">Premium</h3>
              <ul className="plan-block__list">
                <li>Divisões compartilhadas</li>
                <li>Blocos financeiros</li>
                <li>Conexões entre usuários</li>
                <li>Pagamentos compartilhados</li>
                <li>Agenda financeira compartilhada</li>
                <li>Exportação em PDF do Controle Pessoal</li>
                <li>Gestão completa de grupos, contas e vencimentos</li>
              </ul>
            </div>
          </div>

          <p className="plans-note">
            O Premium libera os recursos colaborativos para quem quer organizar contas junto com outras pessoas.
          </p>

          <a
            href={DIVIDE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-divide btn-full"
          >
            Baixar Divide Aí
          </a>
        </div>
      </section>

      {/* ══════════════ 11. QUAL APP É PARA VOCÊ? ══════════════ */}
      <section className="compare-section">
        <div className="compare-inner">
          <h2 className="compare-title">Qual app é para você?</h2>
          <div className="compare-cards">
            <div className="compare-card compare-card--alpha">
              <p className="compare-card__app">Alpha Pro Terminal</p>
              <p className="compare-card__text">
                Escolha o Alpha Pro se você quer testar operações, organizar estratégias, acompanhar robôs, monitorar risco e operar com mais disciplina.
              </p>
              <a
                href={ALPHA_PRO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Baixar Alpha Pro
              </a>
            </div>
            <div className="compare-card compare-card--divide">
              <p className="compare-card__app compare-card__app--divide">Divide Aí</p>
              <p className="compare-card__text">
                Escolha o Divide Aí se você quer organizar despesas, valores a pagar, valores a receber, parcelas, vencimentos e contas compartilhadas.
              </p>
              <a
                href={DIVIDE_AI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-divide btn-sm"
              >
                Baixar Divide Aí
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ 12. CTA FINAL ══════════════ */}
      <section className="conversion-section">
        <div className="conversion-inner">
          <h2 className="conversion-title">
            Menos improviso. Mais controle.
          </h2>
          <p className="conversion-text">
            Escolha o app que resolve sua necessidade agora.
          </p>
          <div className="conversion-buttons">
            <a
              href={ALPHA_PRO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Quero conhecer o Alpha Pro
            </a>
            <a
              href={DIVIDE_AI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-divide"
            >
              Quero conhecer o Divide Aí
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ 13. FOOTER ══════════════ */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-lmc">LMC</span>
          <span className="footer-name">Terminais LMC</span>
        </div>
        <div className="footer-links">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link footer-link-ig"
          >
            @terminaislmc
          </a>
          <a
            href={ALPHA_PRO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Alpha Pro Terminal
          </a>
          <a
            href={DIVIDE_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Divide Aí
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Terminais LMC. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
