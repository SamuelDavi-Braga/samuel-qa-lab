import { Link } from 'react-router'

function Navbar() {
    return (
        <header>
            <h2>SB | QA Engineering Lab</h2>

            <nav>
                <Link to="/">Início</Link>
                <Link to="/#laboratorio">Laboratório</Link>
                <Link to="/#sobre">Sobre mim</Link>
            </nav>
        </header>
    )
}

export default Navbar