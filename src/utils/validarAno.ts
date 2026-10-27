
export function validarAno(
  ano: number,
  anoAtual: number = new Date().getFullYear()
): boolean {
  if (!Number.isInteger(ano)) {
    return false
  }

  return ano >= 1900 && ano <= anoAtual
}
