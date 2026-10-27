
export function verificarCamposObrigatorios(
  placa: string,
  modelo: string,
  ano: string
): string[] {
  const camposVazios: string[] = []

  if (placa.trim() === '') {
    camposVazios.push('placa')
  }

  if (modelo.trim() === '') {
    camposVazios.push('modelo')
  }

  if (ano.trim() === '') {
    camposVazios.push('ano de fabricação')
  }

  return camposVazios
}
