
import { describe, it, expect } from 'vitest'
import { verificarCamposObrigatorios } from './verificarCamposObrigatorios'

describe('RF-002 — Campos obrigatórios', () => {
  it('CT-001 — identifica todos os campos vazios', () => {
    const resultado = verificarCamposObrigatorios('', '', '')

    expect(resultado).toEqual([
      'placa',
      'modelo',
      'ano de fabricação'
    ])
  })

  it('CT-002 — identifica modelo vazio', () => {
    const resultado = verificarCamposObrigatorios(
      'ABC1D23',
      '',
      '2022'
    )

    expect(resultado).toEqual(['modelo'])
  })

  it('CT-003 — identifica ano vazio', () => {
    const resultado = verificarCamposObrigatorios(
      'ABC1D23',
      'Civic',
      ''
    )

    expect(resultado).toEqual(['ano de fabricação'])
  })

  it('CT-005 — identifica placa vazia', () => {
    const resultado = verificarCamposObrigatorios(
      '',
      'Civic',
      '2022'
    )

    expect(resultado).toEqual(['placa'])
  })
})
