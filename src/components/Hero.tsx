function Hero() {
  return (
    <section id="inicio">
      <p>Quality Assurance & Software Engineering</p>

      <h1>Olá, sou Samuel Braga.</h1>

      <h2>QA Júnior</h2>

      <p>
        Transformando requisitos em cenários,
        defeitos em melhorias e conhecimento
        em qualidade de software.
      </p>

      <button
        type="button"
        className="hero-botao"
        onClick={() => {
          document
            .getElementById('laboratorio')
            ?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Explorar laboratório
      </button>
    </section>
  )
}

export default Hero