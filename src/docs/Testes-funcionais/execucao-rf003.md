# Relatório de Execução — RF-003

**Projeto:** QA Engineering Lab — Cadastro de Veículos  
**Requisito:** RF-003 — Validação do formato da placa  
**Tipo de teste:** Funcional manual  
**Ambiente:** Aplicação React executada localmente com Vite  
**Responsável:** Samuel Braga  
**Status:** Concluído

## 1. Objetivo

Validar se o formulário reconhece corretamente os formatos de placas definidos para o projeto, aceitando entradas válidas e rejeitando formatos inválidos.

## 2. Pré-condições

- Aplicação disponível no ambiente local.
- Formulário de cadastro acessível.
- Campo Modelo preenchido com "Civic".
- Campo Ano de fabricação preenchido com "2022".

## 3. Casos de teste

| ID | Entrada | Resultado esperado | Status |
|---|---|---|---|
| CT-006 | ABC1234 | Aceitar formato antigo | OK |
| CT-007 | ABC1D23 | Aceitar formato Mercosul | OK |
| CT-008 | 1234567 | Rejeitar formato inválido | OK |
| CT-009 | ABC12345 | Rejeitar placa com 8 caracteres | OK |
| CT-010 | abc1d23 | Aceitar após normalização para maiúsculas | OK |
| CT-011 | ABC@123 | Rejeitar caracteres especiais | OK |
| CT-012 | A1C1D23 | Rejeitar posição inválida dos caracteres | OK |

## 4. Resultado consolidado

- Casos executados: 7
- Casos aprovados: 7
- Casos reprovados: 0
- Taxa de aprovação: 100%

## 5. Conclusão

Os sete cenários executados apresentaram comportamento compatível com os resultados esperados.

Não foram relatadas divergências durante esta rodada de testes.

A execução não contempla todas as combinações possíveis de entradas nem comprova persistência dos dados em banco de dados.

## 6. Evidências

Pendente de anexação das capturas de tela das execuções realizadas.