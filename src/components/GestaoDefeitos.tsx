import { defeitos } from '../data/defeitos'
import { useState } from 'react'

function GestaoDefeitos() {

    const [defeitoAberto, setDefeitoAberto] = useState<string | null>(null)


    return (
        <section id="gestao-defeitos" className="gestao-defeitos">
            <p className="laboratorio-subtitulo">
                QA LAB / DEFECT MANAGEMENT
            </p>

            <h2>Gestão de Defeitos</h2>

            <p>
                Registro, investigação, correção e
                acompanhamento de defeitos identificados
                durante os testes.
            </p>

            <div className="lista-defeitos">
                {defeitos.map((defeito) => (
                    <article
                        className="defeito-card"
                        key={defeito.id}
                    >
                        <span>{defeito.id}</span>

                        <h3>{defeito.titulo}</h3>

                        <p>
                            <strong>Status:</strong> {defeito.status}
                        </p>

                        <p>
                            <strong>Severidade:</strong> {defeito.severidade}
                        </p>

                        <p>
                            <strong>Prioridade:</strong> {defeito.prioridade}
                        </p>

                        <p>
                            <strong>Reteste:</strong> {defeito.aprovados}
                            /{defeito.retestes} OK
                        </p>

                        <button
                            type="button"
                            className="botao-detalhes"
                            aria-expanded={defeitoAberto === defeito.id}
                            aria-controls={`detalhes-${defeito.id}`}
                            onClick={() =>
                                setDefeitoAberto(
                                    defeitoAberto === defeito.id ? null : defeito.id
                                )
                            }
                        >
                            {defeitoAberto === defeito.id
                                ? 'Ocultar investigação'
                                : 'Ver investigação completa'}
                        </button>

                        {defeitoAberto === defeito.id && (
                            <div
                                id={`detalhes-${defeito.id}`}
                                className="detalhes-defeito"
                            >
                                <h4>Resultado esperado</h4>
                                <p>{defeito.esperado}</p>

                                <h4>Resultado encontrado</h4>
                                <p>{defeito.encontrado}</p>

                                <h4>Investigação técnica</h4>
                                <p>{defeito.causa}</p>

                                <h4>Correção aplicada</h4>
                                <p>{defeito.correcao}</p>

                                <h4>Evidências</h4>

                                <div className="evidencias-grid">
                                    <figure>
                                        <img
                                            src={defeito.evidencias.antes}
                                            alt="Interface antes da correção do BUG-001"
                                            loading="lazy"
                                        />
                                        <figcaption>Antes da correção</figcaption>
                                    </figure>

                                    <figure>
                                        <img
                                            src={defeito.evidencias.depois}
                                            alt="Interface após a correção do BUG-001"
                                            loading="lazy"
                                        />
                                        <figcaption>Depois da correção</figcaption>
                                    </figure>
                                </div>

                                <p>
                                    <strong>Resultado do reteste:</strong>{' '}
                                    {defeito.aprovados}/{defeito.retestes} OK
                                </p>
                            </div>
                        )}

                    </article>
                ))}
            </div>
        </section >
    )
}

export default GestaoDefeitos