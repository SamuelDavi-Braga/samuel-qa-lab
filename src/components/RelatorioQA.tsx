import { resultadosTestes } from '../data/resultadosTestes'
import { useState } from 'react'

function RelatorioQA() {

    const [filtroRequisito, setFiltroRequisito] = useState('Todos')

    const resultadosFiltrados = resultadosTestes.filter(
        (item) =>
            filtroRequisito === 'Todos' ||
            item.requisito === filtroRequisito
    )

    const totalReprovados = resultadosFiltrados.reduce(
        (total, item) => total + item.reprovados,
        0
    )

    const totalExecutados = resultadosFiltrados.reduce(
        (total, item) => total + item.executados,
        0
    )

    const totalAprovados = resultadosFiltrados.reduce(
        (total, item) => total + item.aprovados,
        0
    )

    return (
        <section className="relatorio-qa">
            <p className="laboratorio-subtitulo">
                QUALITY ENGINEERING / TEST RESULTS
            </p>

            <h2>Relatório de Execução</h2>

            <p className="visao-relatorio">
                {filtroRequisito === 'Todos'
                    ? 'Exibindo resultados gerais'
                    : `Exibindo resultados do ${filtroRequisito}`}
            </p>

            <p>
                Acompanhamento dos testes funcionais
                realizados no laboratório.
            </p>

            <div className="relatorio-metricas">
                <article className="metrica-card">
                    <h3>{totalExecutados}</h3>
                    <p>Casos executados</p>
                </article>

                <article className="metrica-card">
                    <h3>{totalAprovados}</h3>
                    <p>Casos aprovados</p>
                </article>

                <article className="metrica-card">
                    <h3>{totalReprovados}</h3>
                    <p>Casos reprovados</p>
                </article>

                <article className="metrica-card">
                    <h3>
                        {totalExecutados > 0
                            ? Math.round((totalAprovados / totalExecutados) * 100)
                            : 0}%
                    </h3>
                    <p>Taxa de aprovação</p>
                </article>
            </div>
            <h3>Resultados por requisito</h3>

            <div className="filtro-qa">
                <label htmlFor="filtro-requisito">
                    Filtrar por requisito:
                </label>

                <select
                    id="filtro-requisito"
                    value={filtroRequisito}
                    onChange={(event) => setFiltroRequisito(event.target.value)}
                >
                    <option value="Todos">Todos os requisitos</option>
                    <option value="RF-002">RF-002</option>
                    <option value="RF-003">RF-003</option>
                    <option value="RF-004">RF-004</option>
                </select>
            </div>

            <div className="tabela-container">
                <table className="tabela-resultados">
                    <thead>
                        <tr>
                            <th>Requisito</th>
                            <th>Descrição</th>
                            <th>Executados</th>
                            <th>Aprovados</th>
                            <th>Reprovados</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resultadosFiltrados.map((item) => (
                            <tr key={item.requisito}>
                                <td>{item.requisito}</td>
                                <td>{item.descricao}</td>
                                <td>{item.executados}</td>
                                <td>{item.aprovados}</td>
                                <td>{item.reprovados}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default RelatorioQA