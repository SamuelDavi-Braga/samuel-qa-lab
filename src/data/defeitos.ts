export const defeitos = [
    {
        id: 'BUG-001',
        titulo: 'Expansão indevida do cartão adjacente',
        modulo: 'Explorador de Casos de Teste',
        categoria: 'UI / Layout',
        severidade: 'Baixa',
        prioridade: 'Média',
        status: 'Resolvido',

        descricao:
            'Ao expandir um cartão, o cartão adjacente também aumentava de altura.',

        esperado:
            'Somente o cartão selecionado deve expandir.',

        encontrado:
            'O cartão vizinho acompanhava a altura do cartão expandido.',

        causa:
            'O CSS Grid esticava os cartões. A primeira tentativa de correção aplicou o alinhamento apenas na media query.',

        correcao:
            'Aplicado align-items: start na regra principal .lista-casos.',

        retestes: 4,
        aprovados: 4,

        evidencias: {
            antes: `${import.meta.env.BASE_URL}evidencias/bug-001-antes.png`,
            depois: `${import.meta.env.BASE_URL}evidencias/bug-001-depois.png`
        }

    }
]