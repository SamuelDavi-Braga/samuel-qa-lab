
import { suitesAutomacao } from '../data/automacaoTestes'

function AutomacaoTestes() {
  const totalAprovados = suitesAutomacao.reduce(
    (total, suite) => total + suite.aprovados,
    0
  )

  const totalReprovados = suitesAutomacao.reduce(
    (total, suite) => total + suite.reprovados,
    0
  )

  return (
    <section id="automacao-testes" className="automacao-testes">
      <p className="laboratorio-subtitulo">
        QA LAB / TEST AUTOMATION
      </p>

      <h2>Automação de Testes</h2>

      <p>
        Suítes automatizadas com Vitest e React Testing Library.
      </p>

      <p className="automacao-aviso">
        Resultados da última execução informada.
        Este painel não consulta o Vitest em tempo real.
      </p>

      <div className="automacao-metricas">
        <div>
          <h3>{suitesAutomacao.length}</h3>
          <p>Suítes</p>
        </div>

        <div>
          <h3>{totalAprovados}</h3>
          <p>Aprovados</p>
        </div>

        <div>
          <h3>{totalReprovados}</h3>
          <p>Reprovados</p>
        </div>
      </div>

      <div className="automacao-lista">
        {suitesAutomacao.map((suite) => (
          <article className="automacao-card" key={suite.id}>
            <span>{suite.id}</span>

            <h3>{suite.titulo}</h3>

            <p>
              <strong>Tecnologia:</strong> {suite.tecnologia}
            </p>

            <p>
              <strong>Arquivo:</strong> {suite.arquivo}
            </p>

            <p>
              <strong>Aprovados:</strong> {suite.aprovados}
            </p>

            <p>
              <strong>Reprovados:</strong> {suite.reprovados}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AutomacaoTestes
