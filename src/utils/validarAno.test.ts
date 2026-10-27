
import { describe, it, expect } from 'vitest'
import { validarAno } from './validarAno'

describe('RF-004 — Validação do ano de fabricação', () => {
  const anoReferencia = 2026

  it('CT-013 — rejeitar ano abaixo do mínimo', () => {
    expect(validarAno(1899, anoReferencia)).toBe(false)
  })

  it('CT-014 — aceitar o limite inferior', () => {
    expect(validarAno(1900, anoReferencia)).toBe(true)
  })

  it('CT-015 — aceitar ano acima do mínimo', () => {
    expect(validarAno(1901, anoReferencia)).toBe(true)
  })

  it('CT-016 — aceitar ano abaixo do máximo', () => {
    expect(validarAno(2025, anoReferencia)).toBe(true)
  })

  it('CT-017 — aceitar o limite superior', () => {
    expect(validarAno(2026, anoReferencia)).toBe(true)
  })

  it('CT-018 — rejeitar ano acima do máximo', () => {
    expect(validarAno(2027, anoReferencia)).toBe(false)
  })

  it('CT-019 — rejeitar ano zero', () => {
    expect(validarAno(0, anoReferencia)).toBe(false)
  })

  it('CT-020 — rejeitar ano negativo', () => {
    expect(validarAno(-1, anoReferencia)).toBe(false)
  })

  it('CT-021 — rejeitar ano decimal', () => {
    expect(validarAno(2020.5, anoReferencia)).toBe(false)
  })
})
