
import { execucoesPortfolio } from '../data/execucoesPortfolio'
import { useState } from 'react'


function HistoricoExecucoes() {
    const [execucaoAberta, setExecucaoAberta] = useState<string | null>(null)
    const totalExecucoes = execucoesPortfolio.length
    const [filtroModulo, setFiltroModulo] = useState('Todos')
    const [filtroStatus, setFiltroStatus] = useState('Todos')

    const totalVerificacoes = execucoesPortfolio.reduce(
        (total, execucao) => total + execucao.verificacoes,
        0
    )

    const totalAprovadas = execucoesPortfolio.reduce(
        (total, execucao) => total + execucao.aprovadas,
        0
    )

    const totalReprovadas = execucoesPortfolio.reduce(
        (total, execucao) => total + execucao.reprovadas,
        0
    )

    const modulos = [
        ...new Set(execucoesPortfolio.map((execucao) => execucao.modulo))
    ]

    const execucoesFiltradas = execucoesPortfolio.filter((execucao) => {
        const moduloCorreto =
            filtroModulo === 'Todos' ||
            execucao.modulo === filtroModulo

        const statusCorreto =
            filtroStatus === 'Todos' ||
            execucao.status === filtroStatus

        return moduloCorreto && statusCorreto
    })

    return (
        <section id="historico-execucoes" className="historico-execucoes">
            <p className="laboratorio-subtitulo">
                QA LAB / EXECUTION HISTORY
            </p>

            <h2>Histórico de Execuções QA</h2>

            <p>
                Registro das validações funcionais realizadas
                no próprio QA Engineering Lab.
            </p>

            <div className="metricas-historico">
                <div className="metrica-historico">
                    <h3>{totalExecucoes}</h3>
                    <p>Execuções registradas</p>
                </div>

                <div className="metrica-historico">
                    <h3>{totalVerificacoes}</h3>
                    <p>Verificações realizadas</p>
                </div>

                <div className="metrica-historico">
                    <h3>{totalAprovadas}</h3>
                    <p>Verificações aprovadas</p>
                </div>

                <div className="metrica-historico">
                    <h3>{totalReprovadas}</h3>
                    <p>Verificações reprovadas</p>
                </div>
            </div>

            <div className="filtros-historico">
                <div>
                    <label htmlFor="filtro-modulo">Módulo</label>

                    <select
                        id="filtro-modulo"
                        value={filtroModulo}
                        onChange={(e) => setFiltroModulo(e.target.value)}
                    >
                        <option value="Todos">Todos</option>

                        {modulos.map((modulo) => (
                            <option key={modulo} value={modulo}>
                                {modulo}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="filtro-status">Status</label>

                    <select
                        id="filtro-status"
                        value={filtroStatus}
                        onChange={(e) => setFiltroStatus(e.target.value)}
                    >
                        <option value="Todos">Todos</option>
                        <option value="Aprovado">Aprovado</option>
                        <option value="Reprovado">Reprovado</option>
                    </select>
                </div>
            </div>

            <div className="resumo-filtros-historico">
                <p>
                    Exibindo {execucoesFiltradas.length} de{' '}
                    {execucoesPortfolio.length} execuções
                </p>

                <button
                    type="button"
                    onClick={() => {
                        setFiltroModulo('Todos')
                        setFiltroStatus('Todos')
                    }}
                >
                    Limpar filtros
                </button>
            </div>

            <div className="lista-execucoes">
                {execucoesFiltradas.length === 0 && (
                    <p className="mensagem-sem-resultados">
                        Nenhuma execução encontrada.
                    </p>
                )}
                {execucoesFiltradas.map((execucao) => (
                    <article
                        className="execucao-card"
                        key={execucao.id}
                    >
                        <span className="execucao-id">
                            {execucao.id}
                        </span>

                        <h3>{execucao.titulo}</h3>

                        <p>
                            <strong>Módulo:</strong> {execucao.modulo}
                        </p>

                        <p>
                            <strong>Status:</strong> {execucao.status}
                        </p>

                        <p>
                            <strong>Verificações:</strong>{' '}
                            {execucao.verificacoes}
                        </p>

                        <p>
                            <strong>Aprovadas:</strong>{' '}
                            {execucao.aprovadas}
                        </p>

                        <p>
                            <strong>Reprovadas:</strong>{' '}
                            {execucao.reprovadas}
                        </p>

                        <p>
                            <strong>Observações:</strong>{' '}
                            {execucao.observacoes}
                        </p>
                        <button
                            type="button"
                            className="botao-detalhes"
                            aria-expanded={execucaoAberta === execucao.id}
                            aria-controls={`verificacoes-${execucao.id}`}
                            onClick={() =>
                                setExecucaoAberta(
                                    execucaoAberta === execucao.id ? null : execucao.id
                                )
                            }
                        >
                            {execucaoAberta === execucao.id
                                ? 'Ocultar verificações'
                                : 'Ver verificações'}
                        </button>

                        {execucaoAberta === execucao.id && (
                            <div
                                id={`verificacoes-${execucao.id}`}
                                className="detalhes-execucao"
                            >
                                <h4>Critérios verificados</h4>

                                <ol>
                                    {execucao.verificacoesDetalhadas.map((verificacao, index) => (
                                        <li key={index}>
                                            <span>{verificacao.descricao}</span>
                                            <strong>{verificacao.resultado}</strong>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default HistoricoExecucoes
