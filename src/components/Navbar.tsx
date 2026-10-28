
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  function abrirLaboratorio() {
    if (location.pathname !== '/') {
      navigate('/')

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document
            .getElementById('laboratorio')
            ?.scrollIntoView({ behavior: 'smooth' })
        })
      })
    } else {
      document
        .getElementById('laboratorio')
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header>
      <h2>SB | QA Engineering Lab</h2>

      <nav>
        <Link to="/">Início</Link>

        <button
          type="button"
          onClick={abrirLaboratorio}
          className="nav-link"
        >
          Laboratório
        </button>
      </nav>
    </header>
  )
}

export default Navbar
