
import { Link } from 'react-router-dom'

function Laboratorio() {
    return (
        <section id="laboratorio" className="laboratorio">
            <p className="laboratorio-subtitulo">
                01 / QA ENGINEERING
            </p>

            <h2>Laboratório de Testes</h2>

            <p>
                Projetos e experimentos que demonstram
                minha evolução em Quality Assurance.
            </p>

            <div className="laboratorio-grid">
                <article className="projeto-card">
                    <h3>Testes Funcionais</h3>
                    <p>Casos de teste e validação de requisitos.</p>

                    <Link to="/laboratorio/testes-funcionais">
                        Explorar Testes Funcionais →
                    </Link>
                </article>

                <article className="projeto-card">
                    <h3>Gestão de Defeitos</h3>
                    <p>Documentação de bugs, evidências e retestes.</p>

                    <Link
                        to="/laboratorio/testes-funcionais"
                        state={{ destino: 'gestao-defeitos' }}
                    >
                        Explorar Gestão de Defeitos →
                    </Link>
                </article>

                <article className="projeto-card">
                    <h3>Histórico de Execuções QA</h3>
                    <p>
                        Rastreabilidade das execuções,
                        verificações e resultados dos testes.
                    </p>

                    <Link
                        to="/laboratorio/testes-funcionais"
                        state={{ destino: 'historico-execucoes' }}
                    >
                        Explorar Histórico QA →
                    </Link>
                </article>

                <article className="projeto-card">
                    <h3>Automação de Testes</h3>
                    <p>
                        Suítes automatizadas com Vitest,
                        React Testing Library e integração contínua.
                    </p>

                    <Link
                        to="/laboratorio/testes-funcionais"
                        state={{ destino: 'automacao-testes' }}
                    >
                        Explorar Automação →
                    </Link>
                </article>
            </div>
        </section>
    )
}

export default Laboratorio
