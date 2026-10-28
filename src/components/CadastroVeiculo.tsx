import { useState } from 'react'
import type { FormEvent } from 'react'
import { validarPlaca } from '../utils/validarPlaca'
import { validarAno } from '../utils/validarAno'
import { verificarCamposObrigatorios } from '../utils/verificarCamposObrigatorios'

function CadastroVeiculo() {

    const [placa, setPlaca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [mensagem, setMensagem] = useState('')

    function validarCadastro(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const camposVazios = verificarCamposObrigatorios(
            placa,
            modelo,
            ano
        )

        if (camposVazios.length === 1) {
            setMensagem(`O campo ${camposVazios[0]} é obrigatório.`)
            return
        }

        if (camposVazios.length > 1) {
            setMensagem('Preencha todos os campos obrigatórios.')
            return
        }

        if (!validarPlaca(placa)) {
            setMensagem('A placa informada possui um formato inválido.')
            return
        }


        const anoInformado = Number(ano)

        if (!Number.isInteger(anoInformado)) {
            setMensagem('O ano de fabricação deve ser um número inteiro.')
            return
        }

        if (!validarAno(anoInformado)) {
            setMensagem('O ano de fabricação está fora do intervalo permitido.')
            return
        }



        setMensagem('Todos os dados informados passaram pelas validações.')
    }

    return (
        <section id="cadastro-veiculo" className="cadastro-veiculo">
            <h2>Cadastro de Veículos</h2>

            <p>
                Ambiente de testes funcionais para validação
                de formulários.
            </p>

            <form onSubmit={validarCadastro}>
                <div>
                    <label htmlFor="placa">Placa</label>
                    <input
                        id="placa"
                        type="text"
                        placeholder="ABC1D23"
                        value={placa}
                        onChange={(event) => setPlaca(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="modelo">Modelo</label>
                    <input
                        id="modelo"
                        type="text"
                        placeholder="Civic"
                        value={modelo}
                        onChange={(event) => setModelo(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="ano">Ano de fabricação</label>
                    <input
                        id="ano"
                        type="number"
                        placeholder="2022"
                        value={ano}
                        onChange={(event) => setAno(event.target.value)}
                    />
                </div>


                <button type="submit">
                    Cadastrar veículo
                </button>
            </form>

            {mensagem && (
                <p role="status" className="mensagem-validacao">
                    {mensagem}
                </p>
            )}

        </section>
    )
}

export default CadastroVeiculo