export interface CasoDeTeste {
  id: string
  requisito: string
  titulo: string
  entrada: string
  esperado: string
  encontrado: string
  status: 'OK' | 'NOK' | 'Não executado'
  tipo: string
  tecnica: string
  preCondicoes: string
  passos: string[]
}