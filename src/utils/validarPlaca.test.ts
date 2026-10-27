
import { describe, it, expect } from 'vitest'
import { validarPlaca } from './validarPlaca'

describe('RF-003 — Validação de placa', () => {
  it('CT-006 — deve aceitar placa no formato antigo', () => {
    expect(validarPlaca('ABC1234')).toBe(true)
  })

  it('CT-007 — deve aceitar placa no formato Mercosul', () => {
    expect(validarPlaca('ABC1D23')).toBe(true)
  })

  it('CT-008 — deve rejeitar placa somente numérica', () => {
    expect(validarPlaca('1234567')).toBe(false)
  })

  it('CT-009 — deve rejeitar placa com oito caracteres', () => {
    expect(validarPlaca('ABC12345')).toBe(false)
  })

  it('CT-010 — deve aceitar placa com letras minúsculas', () => {
    expect(validarPlaca('abc1d23')).toBe(true)
  })

  it('CT-011 — deve rejeitar caractere especial', () => {
    expect(validarPlaca('ABC@123')).toBe(false)
  })

  it('CT-012 — deve rejeitar posicionamento inválido', () => {
    expect(validarPlaca('A1C1D23')).toBe(false)
  })
})
