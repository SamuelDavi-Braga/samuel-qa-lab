
export interface SuiteAutomacao {
  id: string
  titulo: string
  tecnologia: string
  arquivo: string
  aprovados: number
  reprovados: number
}

export const suitesAutomacao: SuiteAutomacao[] = [
  {
    id: 'RF-002',
    titulo: 'Campos obrigatórios',
    tecnologia: 'Vitest',
    arquivo: 'verificarCamposObrigatorios.test.ts',
    aprovados: 4,
    reprovados: 0
  },
  {
    id: 'RF-003',
    titulo: 'Validação de placas',
    tecnologia: 'Vitest',
    arquivo: 'validarPlaca.test.ts',
    aprovados: 7,
    reprovados: 0
  },
  {
    id: 'RF-004',
    titulo: 'Ano de fabricação',
    tecnologia: 'Vitest',
    arquivo: 'validarAno.test.ts',
    aprovados: 9,
    reprovados: 0
  },
  {
    id: 'UI-001',
    titulo: 'Interface de Cadastro de Veículos',
    tecnologia: 'Vitest + React Testing Library',
    arquivo: 'CadastroVeiculo.test.tsx',
    aprovados: 9,
    reprovados: 0
  }
]
