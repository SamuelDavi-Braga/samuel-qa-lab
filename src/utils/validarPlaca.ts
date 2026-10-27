
export function validarPlaca(placa: string): boolean {
  const placaNormalizada = placa.toUpperCase()

  const formatoAntigo = /^[A-Z]{3}[0-9]{4}$/
  const formatoMercosul = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/

  return (
    formatoAntigo.test(placaNormalizada) ||
    formatoMercosul.test(placaNormalizada)
  )
}
