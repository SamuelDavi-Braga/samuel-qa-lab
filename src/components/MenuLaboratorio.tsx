
function MenuLaboratorio() {
    function navegarPara(id: string) {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
        <nav className="menu-laboratorio" aria-label="Navegação do laboratório">
            <button type="button" onClick={() => navegarPara('cadastro-veiculo')}>
                Cadastro de Veículos
            </button>

            <button type="button" onClick={() => navegarPara('gestao-defeitos')}>
                Gestão de Defeitos
            </button>

            <button type="button" onClick={() => navegarPara('historico-execucoes')}>
                Histórico QA
            </button>

            <button type="button" onClick={() => navegarPara('automacao-testes')}>
                Automação de Testes
            </button>
        </nav>
    )
}

export default MenuLaboratorio
