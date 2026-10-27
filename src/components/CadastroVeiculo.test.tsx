
/**
 * @vitest-environment jsdom
 */

import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'

import CadastroVeiculo from './CadastroVeiculo'

afterEach(() => {
    cleanup()
})

describe('Cadastro de Veículos — Testes de interface', () => {
    it('deve apresentar o formulário de cadastro', () => {
        render(<CadastroVeiculo />)

        expect(screen.getByRole('textbox', { name: 'Placa' }))
            .toBeInTheDocument()

        expect(screen.getByRole('textbox', { name: 'Modelo' }))
            .toBeInTheDocument()

        expect(screen.getByRole('spinbutton', { name: 'Ano de fabricação' }))
            .toBeInTheDocument()

        expect(screen.getByRole('button', { name: 'Cadastrar veículo' }))
            .toBeInTheDocument()
    })

    it('deve informar quando todos os campos estão vazios', async () => {
        const user = userEvent.setup()

        render(<CadastroVeiculo />)

        await user.click(
            screen.getByRole('button', { name: 'Cadastrar veículo' })
        )

        expect(screen.getByRole('status'))
            .toHaveTextContent('Preencha todos os campos obrigatórios.')
    })

    it('deve informar quando o modelo está vazio', async () => {
        const user = userEvent.setup()

        render(<CadastroVeiculo />)

        await user.type(
            screen.getByRole('textbox', { name: 'Placa' }),
            'ABC1D23'
        )

        await user.type(
            screen.getByRole('spinbutton', { name: 'Ano de fabricação' }),
            '2022'
        )

        await user.click(
            screen.getByRole('button', { name: 'Cadastrar veículo' })
        )

        expect(screen.getByRole('status'))
            .toHaveTextContent('O campo modelo é obrigatório.')
    })

    it('deve aceitar dados válidos no formulário', async () => {
        const user = userEvent.setup()

        render(<CadastroVeiculo />)

        await user.type(
            screen.getByRole('textbox', { name: 'Placa' }),
            'ABC1D23'
        )

        await user.type(
            screen.getByRole('textbox', { name: 'Modelo' }),
            'Civic'
        )

        await user.type(
            screen.getByRole('spinbutton', { name: 'Ano de fabricação' }),
            '2022'
        )

        await user.click(
            screen.getByRole('button', { name: 'Cadastrar veículo' })
        )

        expect(screen.getByRole('status'))
            .toHaveTextContent(
                'Todos os dados informados passaram pelas validações.'
            )

    })

    it('deve rejeitar uma placa com formato inválido', async () => {
        const user = userEvent.setup()

        render(<CadastroVeiculo />)

        await user.type(
            screen.getByRole('textbox', { name: 'Placa' }),
            '1234567'
        )

        await user.type(
            screen.getByRole('textbox', { name: 'Modelo' }),
            'Civic'
        )

        await user.type(
            screen.getByRole('spinbutton', { name: 'Ano de fabricação' }),
            '2022'
        )

        await user.click(
            screen.getByRole('button', { name: 'Cadastrar veículo' })
        )

        expect(screen.getByRole('status'))
            .toHaveTextContent(
                'A placa informada possui um formato inválido.'
            )
    })

    it('deve rejeitar ano abaixo do mínimo', async () => {
        const user = userEvent.setup()
        render(<CadastroVeiculo />)

        await user.type(screen.getByRole('textbox', { name: 'Placa' }), 'ABC1D23')
        await user.type(screen.getByRole('textbox', { name: 'Modelo' }), 'Civic')
        await user.type(screen.getByRole('spinbutton', { name: 'Ano de fabricação' }), '1899')

        await user.click(screen.getByRole('button', { name: 'Cadastrar veículo' }))

        expect(screen.getByRole('status')).toHaveTextContent(
            'O ano de fabricação está fora do intervalo permitido.'
        )
    })


    it('deve rejeitar ano superior ao ano atual', async () => {
        const user = userEvent.setup()
        const proximoAno = new Date().getFullYear() + 1

        render(<CadastroVeiculo />)

        await user.type(
            screen.getByRole('textbox', { name: 'Placa' }),
            'ABC1D23'
        )

        await user.type(
            screen.getByRole('textbox', { name: 'Modelo' }),
            'Civic'
        )

        await user.type(
            screen.getByRole('spinbutton', { name: 'Ano de fabricação' }),
            String(proximoAno)
        )

        await user.click(
            screen.getByRole('button', { name: 'Cadastrar veículo' })
        )

        expect(screen.getByRole('status')).toHaveTextContent(
            'O ano de fabricação está fora do intervalo permitido.'
        )
    })


    it('deve informar quando o ano está vazio', async () => {
        const user = userEvent.setup()
        render(<CadastroVeiculo />)

        await user.type(screen.getByRole('textbox', { name: 'Placa' }), 'ABC1D23')
        await user.type(screen.getByRole('textbox', { name: 'Modelo' }), 'Civic')

        await user.click(screen.getByRole('button', { name: 'Cadastrar veículo' }))

        expect(screen.getByRole('status')).toHaveTextContent(
            'O campo ano de fabricação é obrigatório.'
        )
    })

    it('deve informar quando a placa está vazia', async () => {
        const user = userEvent.setup()
        render(<CadastroVeiculo />)

        await user.type(screen.getByRole('textbox', { name: 'Modelo' }), 'Civic')
        await user.type(screen.getByRole('spinbutton', { name: 'Ano de fabricação' }), '2022')

        await user.click(screen.getByRole('button', { name: 'Cadastrar veículo' }))

        expect(screen.getByRole('status')).toHaveTextContent(
            'O campo placa é obrigatório.'
        )
    })


})
