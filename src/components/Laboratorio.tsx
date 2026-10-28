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
                        Explorar projeto →
                    </Link>
                </article>

                <article className="projeto-card">
                    <h3>Gestão de Defeitos</h3>
                    <p>Documentação de bugs, evidências e retestes.</p>
                    <span>Em desenvolvimento</span>
                </article>

                <article className="projeto-card">
                    <h3>Testes com IA</h3>
                    <p>Revisão de cenários gerados com apoio de IA.</p>
                    <span>Em desenvolvimento</span>
                </article>

                <article className="projeto-card">
                    <h3>QA Analytics</h3>
                    <p>Indicadores e acompanhamento da qualidade.</p>
                    <span>Em desenvolvimento</span>
                </article>
            </div>
        </section>
    )
}

export default Laboratorio