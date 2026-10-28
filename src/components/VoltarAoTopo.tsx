
import { useEffect, useState } from 'react'

function VoltarAoTopo() {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        function verificarRolagem() {
            setVisivel(window.scrollY > 400)
        }

        verificarRolagem()

        window.addEventListener('scroll', verificarRolagem, {
            passive: true
        })

        return () => {
            window.removeEventListener('scroll', verificarRolagem)
        }
    }, [])

    function voltarAoTopo() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!visivel) return null

    return (
        <button
            type="button"
            className="voltar-topo"
            onClick={voltarAoTopo}
            aria-label="Voltar ao topo da página"
            title="Voltar ao topo"
        >
            ↑
        </button>
    )
}

export default VoltarAoTopo
