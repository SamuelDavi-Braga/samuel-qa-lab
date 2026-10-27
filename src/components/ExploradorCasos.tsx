import { casosDeTeste } from '../data/casosDeTeste'
import { useState } from 'react'

function ExploradorCasos() {

    const [filtro, setFiltro] = useState('Todos')
    const [casoAberto, setCasoAberto] = useState<string | null>(null)
    const [busca, setBusca] = useState('')
    const [ordenacao, setOrdenacao] = useState('asc')

    const casosFiltrados = casosDeTeste
        .filter((caso) => {
            const correspondeRequisito =
                filtro === 'Todos' || caso.requisito === filtro

            const termo = busca.trim().toLowerCase()

            const correspondeBusca =
                caso.id.toLowerCase().includes(termo) ||
                caso.titulo.toLowerCase().includes(termo)

            return correspondeRequisito && correspondeBusca
        })
        .sort((a, b) =>
            ordenacao === 'asc'
                ? a.id.localeCompare(b.id, undefined, { numeric: true })
                : b.id.localeCompare(a.id, undefined, { numeric: true })
        )



    return (
        <section className="explorador-casos">
            <p className="laboratorio-subtitulo">
                QA LAB / TEST CASE EXPLORER
            </p>

            <h2>Explorador de Casos de Teste</h2>

            <p>
                Consulte cenários, dados utilizados
                e resultados das execuções.
            </p>

            <div className="filtro-qa">
                <label htmlFor="filtro-casos">
                    Filtrar casos por requisito:
                </label>

                <select
                    id="filtro-casos"
                    value={filtro}
                    onChange={(event) => {
                        setFiltro(event.target.value)
                        setCasoAberto(null)
                    }}
                >
                    <option value="Todos">Todos os requisitos</option>
                    <option value="RF-002">RF-002</option>
                    <option value="RF-003">RF-003</option>
                    <option value="RF-004">RF-004</option>
                </select>
            </div>

            <div className="controles-explorador">
                <div className="campo-busca">
                    <label htmlFor="busca-caso">
                        Buscar caso de teste
                    </label>

                    <input
                        id="busca-caso"
                        type="search"
                        placeholder="Ex.: CT-018 ou Ano negativo"
                        value={busca}
                        onChange={(evento) => setBusca(evento.target.value)}
                    />
                </div>

                <div className="campo-ordenacao">
                    <label htmlFor="ordenacao-casos">
                        Ordenar casos
                    </label>

                    <select
                        id="ordenacao-casos"
                        value={ordenacao}
                        onChange={(evento) => setOrdenacao(evento.target.value)}
                    >
                        <option value="asc">Menor ID primeiro</option>
                        <option value="desc">Maior ID primeiro</option>
                    </select>
                </div>
            </div>

            <p className="contador-casos" aria-live="polite">
                Exibindo {casosFiltrados.length} de {casosDeTeste.length} casos
            </p>

            {casosFiltrados.length === 0 && (
                <p className="mensagem-sem-resultados">
                    Nenhum caso de teste encontrado.
                </p>
            )}

            <div className="lista-casos">
                {casosFiltrados.map((caso) => (
                    <article className="caso-card" key={caso.id}>
                        <span>{caso.requisito} / {caso.id}</span>

                        <h3>{caso.titulo}</h3>

                        <p>Status: {caso.status}</p>

                        <button
                            type="button"
                            className="botao-detalhes"
                            aria-expanded={casoAberto === caso.id}
                            onClick={() =>
                                setCasoAberto(casoAberto === caso.id ? null : caso.id)
                            }
                        >
                            {casoAberto === caso.id
                                ? 'Ocultar detalhes'
                                : 'Ver detalhes'}
                        </button>

                        {casoAberto === caso.id && (
                            <div className="detalhes-caso">
                                <p><strong>Entrada:</strong> {caso.entrada}</p>
                                <p><strong>Esperado:</strong> {caso.esperado}</p>
                                <p><strong>Encontrado:</strong> {caso.encontrado}</p>
                                {'tipo' in caso && (
                                    <p>
                                        <strong>Tipo de teste:</strong> {caso.tipo}
                                    </p>
                                )}

                                {'tecnica' in caso && (
                                    <p>
                                        <strong>Técnica utilizada:</strong> {caso.tecnica}
                                    </p>
                                )}

                                {'preCondicoes' in caso && (
                                    <p>
                                        <strong>Pré-condições:</strong> {caso.preCondicoes}
                                    </p>
                                )}

                                {'passos' in caso && Array.isArray(caso.passos) && (
                                    <div className="passos-caso">
                                        <h4>Passos de execução</h4>

                                        <ol>
                                            {caso.passos.map((passo, index) => (
                                                <li key={index}>{passo}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ExploradorCasos