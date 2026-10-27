import type { CasoDeTeste } from '../types/CasoDeTeste'

export const casosDeTeste: CasoDeTeste[] = [
    {
        id: 'CT-002',
        requisito: 'RF-002',
        titulo: 'Modelo não informado',
        entrada: 'Placa ABC1D23, modelo vazio, ano 2022',
        esperado: 'Impedir o envio e informar que o modelo é obrigatório.',
        encontrado: 'Mensagem específica de obrigatoriedade exibida.',
        status: 'OK',
        tipo: 'Teste funcional negativo',

        tecnica: 'Particionamento de equivalência',

        preCondicoes:
            'Formulário de cadastro de veículos disponível.',

        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Deixar o campo Modelo vazio.',
            'Informar o ano de fabricação 2022.',
            'Clicar no botão Cadastrar veículo.',
            'Verificar a mensagem de obrigatoriedade do modelo.'
        ]
    },
    {
        id: 'CT-012',
        requisito: 'RF-003',
        titulo: 'Posicionamento inválido da placa',
        entrada: 'Placa A1C1D23, modelo Civic, ano 2022',
        esperado: 'Rejeitar o formato inválido da placa.',
        encontrado: 'Formato da placa rejeitado.',
        status: 'OK',
        tipo: 'Teste funcional negativo',

        tecnica: 'Particionamento de equivalência',

        preCondicoes:
            'Formulário de cadastro de veículos disponível.',

        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa A1C1D23.',
            'Preencher o modelo Civic.',
            'Preencher o ano de fabricação 2022.',
            'Clicar no botão Cadastrar veículo.'
        ]
    },
    {
        id: 'CT-006',
        requisito: 'RF-003',
        titulo: 'Validar placa no formato antigo',
        entrada: 'Placa ABC1234, modelo Civic, ano 2022',
        esperado: 'Aceitar placa no formato antigo.',
        encontrado: 'Placa aceita na validação do formulário.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1234.',
            'Preencher o modelo Civic.',
            'Preencher o ano de fabricação 2022.',
            'Clicar no botão Cadastrar veículo.',
            'Verificar se os dados passam pelas validações.'
        ]
    },
    {
        id: 'CT-021',
        requisito: 'RF-004',
        titulo: 'Ano decimal',
        entrada: 'Placa ABC1D23, modelo Civic, ano 2020.5',
        esperado: 'Impedir o envio de ano decimal.',
        encontrado: 'Entrada decimal rejeitada pelo formulário.',
        status: 'OK',
        tipo: 'Teste funcional negativo',

        tecnica: 'Particionamento de equivalência',

        preCondicoes:
            'Formulário de cadastro de veículos disponível.',

        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Informar 2020.5 no campo Ano de fabricação.',
            'Tentar enviar o formulário.',
            'Verificar se o valor decimal é rejeitado.'
        ]
    }, {
        id: 'CT-007',
        requisito: 'RF-003',
        titulo: 'Validar placa no formato Mercosul',
        entrada: 'Placa ABC1D23, modelo Civic, ano 2022',
        esperado: 'Aceitar a placa no formato Mercosul.',
        encontrado: 'Placa aceita na validação do formulário.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Preencher o modelo Civic.',
            'Informar o ano de fabricação 2022.',
            'Clicar em Cadastrar veículo.',
            'Verificar se a placa passa pela validação.'
        ]
    },
    {
        id: 'CT-008',
        requisito: 'RF-003',
        titulo: 'Rejeitar placa composta somente por números',
        entrada: 'Placa 1234567, modelo Civic, ano 2022',
        esperado: 'Rejeitar a placa por não atender aos formatos permitidos.',
        encontrado: 'Formato inválido rejeitado pelo formulário.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa 1234567.',
            'Preencher o modelo Civic.',
            'Informar o ano de fabricação 2022.',
            'Clicar em Cadastrar veículo.',
            'Verificar se a placa é rejeitada.'
        ]
    },
    {
        id: 'CT-009',
        requisito: 'RF-003',
        titulo: 'Rejeitar placa com oito caracteres',
        entrada: 'Placa ABC12345, modelo Civic, ano 2022',
        esperado: 'Rejeitar a placa por exceder os sete caracteres permitidos.',
        encontrado: 'Placa com oito caracteres rejeitada.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC12345.',
            'Preencher o modelo Civic.',
            'Informar o ano de fabricação 2022.',
            'Clicar em Cadastrar veículo.',
            'Verificar se a entrada de oito caracteres é rejeitada.'
        ]
    },
    {
        id: 'CT-010',
        requisito: 'RF-003',
        titulo: 'Validar placa com letras minúsculas',
        entrada: 'Placa abc1d23, modelo Civic, ano 2022',
        esperado: 'Aceitar a placa após normalizar as letras para maiúsculas.',
        encontrado: 'Formato aceito após normalização para validação.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa abc1d23.',
            'Preencher o modelo Civic.',
            'Informar o ano de fabricação 2022.',
            'Clicar em Cadastrar veículo.',
            'Verificar se o formato é aceito.'
        ]
    },
    {
        id: 'CT-011',
        requisito: 'RF-003',
        titulo: 'Rejeitar placa com caractere especial',
        entrada: 'Placa ABC@123, modelo Civic, ano 2022',
        esperado: 'Rejeitar a placa por conter caractere especial.',
        encontrado: 'Formato com caractere especial rejeitado.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC@123.',
            'Preencher o modelo Civic.',
            'Informar o ano de fabricação 2022.',
            'Clicar em Cadastrar veículo.',
            'Verificar se o formato é rejeitado.'
        ]
    },

    {
        id: 'CT-001',
        requisito: 'RF-002',
        titulo: 'Todos os campos obrigatórios vazios',
        entrada: 'Placa vazia, modelo vazio, ano vazio',
        esperado: 'Impedir o envio e informar que existem campos obrigatórios não preenchidos.',
        encontrado: 'Envio impedido conforme execução manual aprovada.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Deixar o campo Placa vazio.',
            'Deixar o campo Modelo vazio.',
            'Deixar o campo Ano vazio.',
            'Tentar enviar o formulário.',
            'Verificar se o envio é impedido e uma mensagem de obrigatoriedade é apresentada.'
        ]
    },
    {
        id: 'CT-003',
        requisito: 'RF-002',
        titulo: 'Ano de fabricação não informado',
        entrada: 'Placa ABC1D23, modelo Civic, ano vazio',
        esperado: 'Impedir o envio e informar que o ano de fabricação é obrigatório.',
        encontrado: 'Validação de obrigatoriedade aprovada na execução manual.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Deixar o campo Ano vazio.',
            'Tentar enviar o formulário.',
            'Verificar se o envio é impedido e o ano obrigatório é informado.'
        ]
    },
    {
        id: 'CT-005',
        requisito: 'RF-002',
        titulo: 'Placa não informada',
        entrada: 'Placa vazia, modelo Civic, ano 2022',
        esperado: 'Impedir o envio e informar que a placa é obrigatória.',
        encontrado: 'Validação de obrigatoriedade aprovada na execução manual.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário de cadastro de veículos disponível.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Deixar o campo Placa vazio.',
            'Informar o modelo Civic.',
            'Informar o ano de fabricação 2022.',
            'Tentar enviar o formulário.',
            'Verificar se o envio é impedido e a placa obrigatória é informada.'
        ]
    },
    {
        id: 'CT-013',
        requisito: 'RF-004',
        titulo: 'Ano abaixo do limite mínimo',
        entrada: 'Placa ABC1D23, modelo Civic, ano 1899',
        esperado: 'Rejeitar o ano 1899 por ser inferior a 1900.',
        encontrado: 'Ano rejeitado conforme execução manual aprovada.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 1899.',
            'Tentar enviar o formulário.',
            'Verificar se o ano abaixo do mínimo é rejeitado.'
        ]
    },
    {
        id: 'CT-014',
        requisito: 'RF-004',
        titulo: 'Ano no limite mínimo permitido',
        entrada: 'Placa ABC1D23, modelo Civic, ano 1900',
        esperado: 'Aceitar o ano 1900 como limite inferior válido.',
        encontrado: 'Ano aceito conforme execução manual aprovada.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 1900.',
            'Clicar em Cadastrar veículo.',
            'Verificar se o ano passa pela validação.'
        ]
    },
    {
        id: 'CT-015',
        requisito: 'RF-004',
        titulo: 'Ano imediatamente acima do mínimo',
        entrada: 'Placa ABC1D23, modelo Civic, ano 1901',
        esperado: 'Aceitar o ano 1901 dentro do intervalo permitido.',
        encontrado: 'Ano aceito conforme execução manual aprovada.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 1901.',
            'Clicar em Cadastrar veículo.',
            'Verificar se o ano passa pela validação.'
        ]
    },
    {
        id: 'CT-016',
        requisito: 'RF-004',
        titulo: 'Ano imediatamente abaixo do máximo',
        entrada: 'Placa ABC1D23, modelo Civic, ano 2025',
        esperado: 'Aceitar o ano 2025, considerando 2026 como ano atual.',
        encontrado: 'Ano aceito na execução manual de 26/10/2026.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic. Ano de referência: 2026.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 2025.',
            'Clicar em Cadastrar veículo.',
            'Verificar se o ano passa pela validação.'
        ]
    },
    {
        id: 'CT-017',
        requisito: 'RF-004',
        titulo: 'Ano no limite máximo permitido',
        entrada: 'Placa ABC1D23, modelo Civic, ano 2026',
        esperado: 'Aceitar o ano 2026 como limite superior na execução de 2026.',
        encontrado: 'Ano aceito na execução manual de 26/10/2026.',
        status: 'OK',
        tipo: 'Teste funcional positivo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic. Ano de referência: 2026.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 2026.',
            'Clicar em Cadastrar veículo.',
            'Verificar se o ano passa pela validação.'
        ]
    },
    {
        id: 'CT-018',
        requisito: 'RF-004',
        titulo: 'Ano acima do limite máximo',
        entrada: 'Placa ABC1D23, modelo Civic, ano 2027',
        esperado: 'Rejeitar o ano 2027 por ser superior ao ano atual de 2026.',
        encontrado: 'Ano rejeitado na execução manual de 26/10/2026.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Análise de valor-limite',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic. Ano de referência: 2026.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 2027.',
            'Tentar enviar o formulário.',
            'Verificar se o ano acima do máximo é rejeitado.'
        ]
    },
    {
        id: 'CT-019',
        requisito: 'RF-004',
        titulo: 'Ano igual a zero',
        entrada: 'Placa ABC1D23, modelo Civic, ano 0',
        esperado: 'Rejeitar o ano zero por estar abaixo do mínimo permitido.',
        encontrado: 'Ano rejeitado conforme execução manual aprovada.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano 0.',
            'Tentar enviar o formulário.',
            'Verificar se o ano zero é rejeitado.'
        ]
    },
    {
        id: 'CT-020',
        requisito: 'RF-004',
        titulo: 'Ano negativo',
        entrada: 'Placa ABC1D23, modelo Civic, ano -1',
        esperado: 'Rejeitar valores negativos para o ano de fabricação.',
        encontrado: 'Ano negativo rejeitado conforme execução manual aprovada.',
        status: 'OK',
        tipo: 'Teste funcional negativo',
        tecnica: 'Particionamento de equivalência',
        preCondicoes: 'Formulário disponível, placa ABC1D23 e modelo Civic.',
        passos: [
            'Acessar o formulário de cadastro.',
            'Informar a placa ABC1D23.',
            'Informar o modelo Civic.',
            'Preencher o ano -1.',
            'Tentar enviar o formulário.',
            'Verificar se o ano negativo é rejeitado.'
        ]
    }

]