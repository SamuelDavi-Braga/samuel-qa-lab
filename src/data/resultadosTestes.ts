
import { casosDeTeste } from './casosDeTeste'

const requisitos = [
  {
    requisito: 'RF-002',
    descricao: 'Campos obrigatórios'
  },
  {
    requisito: 'RF-003',
    descricao: 'Validação da placa'
  },
  {
    requisito: 'RF-004',
    descricao: 'Ano de fabricação'
  }
]

export const resultadosTestes = requisitos.map((item) => {
  const casosDoRequisito = casosDeTeste.filter(
    (caso) => caso.requisito === item.requisito
  )

  return {
    requisito: item.requisito,
    descricao: item.descricao,
    executados: casosDoRequisito.filter(
      (caso) => caso.status !== 'Não executado'
    ).length,
    aprovados: casosDoRequisito.filter(
      (caso) => caso.status === 'OK'
    ).length,
    reprovados: casosDoRequisito.filter(
      (caso) => caso.status === 'NOK'
    ).length
  }
})
