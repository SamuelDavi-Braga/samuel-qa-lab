


export interface VerificacaoExecucao {
    descricao: string
    resultado: 'OK' | 'NOK'
}

export interface ExecucaoPortfolio {
    id: string
    titulo: string
    modulo: string
    verificacoes: number
    aprovadas: number
    reprovadas: number
    status: 'Aprovado' | 'Reprovado'
    observacoes: string
    verificacoesDetalhadas: VerificacaoExecucao[]
}

export const execucoesPortfolio: ExecucaoPortfolio[] = [
    {
        id: 'CT-037',
        titulo: 'Biblioteca completa',
        modulo: 'Explorador de Casos',
        verificacoes: 7,
        aprovadas: 7,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'Nenhuma',
        verificacoesDetalhadas: [
            { descricao: 'Exibir 20 casos únicos, sem IDs duplicados.', resultado: 'OK' },
            { descricao: 'Filtro RF-002 apresenta 4 casos.', resultado: 'OK' },
            { descricao: 'Filtro RF-003 apresenta 7 casos.', resultado: 'OK' },
            { descricao: 'Filtro RF-004 apresenta 9 casos.', resultado: 'OK' },
            { descricao: 'Todos os cartões apresentam documentação completa.', resultado: 'OK' },
            { descricao: 'Dashboard mantém os indicadores corretos.', resultado: 'OK' },
            { descricao: 'Filtros, expansão e responsividade funcionam.', resultado: 'OK' }
        ]
    },
    {
        id: 'CT-038',
        titulo: 'Integração dos indicadores',
        modulo: 'Dashboard QA',
        verificacoes: 7,
        aprovadas: 7,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'Nenhuma',
        verificacoesDetalhadas: [
            { descricao: 'Dashboard apresenta 20 executados, 20 aprovados e 0 reprovados.', resultado: 'OK' },
            { descricao: 'Requisitos apresentam totais de 4, 7 e 9 casos.', resultado: 'OK' },
            { descricao: 'Simulação com CT-008 NOK atualiza os totais.', resultado: 'OK' },
            { descricao: 'Taxa de aprovação passa para 95% na simulação.', resultado: 'OK' },
            { descricao: 'Explorador apresenta CT-008 como NOK durante a simulação.', resultado: 'OK' },
            { descricao: 'Restauração do CT-008 recupera os indicadores originais.', resultado: 'OK' },
            { descricao: 'Filtros, cartões e responsividade continuam funcionando.', resultado: 'OK' }
        ]
    },
    {
        id: 'CT-039',
        titulo: 'Busca e ordenação',
        modulo: 'Explorador de Casos',
        verificacoes: 8,
        aprovadas: 8,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'Nenhuma',
        verificacoesDetalhadas: [
            { descricao: 'Explorador exibe 20 de 20 casos sem filtros.', resultado: 'OK' },
            { descricao: 'Busca por CT-018 encontra o caso correto.', resultado: 'OK' },
            { descricao: 'Busca por Ano negativo encontra CT-020.', resultado: 'OK' },
            { descricao: 'Combinação RF-003 com CT-020 não retorna resultados.', resultado: 'OK' },
            { descricao: 'Ordenação crescente e decrescente funciona.', resultado: 'OK' },
            { descricao: 'Contador reflete os resultados filtrados.', resultado: 'OK' },
            { descricao: 'Busca funciona independentemente de maiúsculas e minúsculas.', resultado: 'OK' },
            { descricao: 'Expansão, dashboard e responsividade continuam funcionando.', resultado: 'OK' }
        ]
    },

    {
        id: 'CT-040',
        titulo: 'Histórico de Execuções QA',
        modulo: 'Histórico de Execuções',
        verificacoes: 7,
        aprovadas: 7,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'MEL-002 identificada: inconsistência tipográfica posteriormente corrigida.',
        verificacoesDetalhadas: [
            { descricao: 'Seção exibida após Gestão de Defeitos.', resultado: 'OK' },
            { descricao: 'CT-037, CT-038 e CT-039 exibidos sem duplicações.', resultado: 'OK' },
            { descricao: 'Título, módulo, status e quantidades exibidos.', resultado: 'OK' },
            { descricao: 'Observações apresentadas corretamente.', resultado: 'OK' },
            { descricao: 'Dashboard mantém os 20 casos funcionais.', resultado: 'OK' },
            { descricao: 'Cartões responsivos em telas menores.', resultado: 'OK' },
            { descricao: 'Funcionalidades anteriores preservadas.', resultado: 'OK' }
        ]
    },
    {
        id: 'CT-041',
        titulo: 'Padronização tipográfica — MEL-002',
        modulo: 'Histórico de Execuções',
        verificacoes: 5,
        aprovadas: 5,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'MEL-002 corrigida e retestada.',
        verificacoesDetalhadas: [
            { descricao: 'Tamanho do título padronizado.', resultado: 'OK' },
            { descricao: 'Cor e estilo do título consistentes.', resultado: 'OK' },
            { descricao: 'Subtítulo mantém a aparência esperada.', resultado: 'OK' },
            { descricao: 'Cartões CT-037, CT-038 e CT-039 preservados.', resultado: 'OK' },
            { descricao: 'Layout e tipografia responsivos.', resultado: 'OK' }
        ]
    },
    {
        id: 'CT-042',
        titulo: 'Detalhes individuais das execuções',
        modulo: 'Histórico de Execuções',
        verificacoes: 8,
        aprovadas: 8,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'Nenhuma',
        verificacoesDetalhadas: [
            { descricao: 'Três cartões apresentam botões de expansão.', resultado: 'OK' },
            { descricao: 'CT-037 apresenta sete critérios OK.', resultado: 'OK' },
            { descricao: 'CT-038 apresenta sete critérios OK.', resultado: 'OK' },
            { descricao: 'CT-039 apresenta oito critérios OK.', resultado: 'OK' },
            { descricao: 'Recolhimento dos detalhes funciona.', resultado: 'OK' },
            { descricao: 'Cartões adjacentes não são esticados.', resultado: 'OK' },
            { descricao: 'Apresentação responsiva validada.', resultado: 'OK' },
            { descricao: 'Dashboard e funcionalidades anteriores preservados.', resultado: 'OK' }
        ]
    },

    {
        id: 'CT-043',
        titulo: 'Histórico e indicadores dinâmicos',
        modulo: 'Histórico de Execuções',
        verificacoes: 8,
        aprovadas: 8,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'Nenhuma',
        verificacoesDetalhadas: [
            { descricao: 'Histórico apresenta seis execuções sem duplicações.', resultado: 'OK' },
            { descricao: 'Indicador de execuções apresenta 6.', resultado: 'OK' },
            { descricao: 'Indicador de verificações apresenta 42.', resultado: 'OK' },
            { descricao: 'Indicadores de aprovação e reprovação apresentam 42 e 0.', resultado: 'OK' },
            { descricao: 'CT-040, CT-041 e CT-042 exibem verificações detalhadas.', resultado: 'OK' },
            { descricao: 'MEL-002 permanece documentada no CT-040.', resultado: 'OK' },
            { descricao: 'Dashboard mantém 20 casos funcionais aprovados.', resultado: 'OK' },
            { descricao: 'Indicadores e cartões permanecem responsivos.', resultado: 'OK' }
        ]
    },
    {
        id: 'CT-044',
        titulo: 'Filtros do Histórico de Execuções',
        modulo: 'Histórico de Execuções',
        verificacoes: 8,
        aprovadas: 8,
        reprovadas: 0,
        status: 'Aprovado',
        observacoes: 'Nenhuma',
        verificacoesDetalhadas: [
            { descricao: 'Sem filtros, seis execuções são exibidas.', resultado: 'OK' },
            { descricao: 'Filtro Explorador de Casos apresenta CT-037 e CT-039.', resultado: 'OK' },
            { descricao: 'Filtro Dashboard QA apresenta somente CT-038.', resultado: 'OK' },
            { descricao: 'Filtro Histórico apresenta CT-040, CT-041 e CT-042.', resultado: 'OK' },
            { descricao: 'Filtro Reprovado exibe mensagem de ausência de resultados.', resultado: 'OK' },
            { descricao: 'Contador acompanha os filtros corretamente.', resultado: 'OK' },
            { descricao: 'Limpar filtros restaura as execuções.', resultado: 'OK' },
            { descricao: 'Detalhes, indicadores e responsividade permanecem funcionando.', resultado: 'OK' }
        ]
    }



]
