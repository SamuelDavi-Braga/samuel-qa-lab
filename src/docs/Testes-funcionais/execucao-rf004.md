# Relatório de Execução — RF-004

**Projeto:** QA Engineering Lab — Cadastro de Veículos  
**Requisito:** RF-004 — Validação do ano de fabricação  
**Responsável:** Samuel Braga  
**Data:** 26/10/2026  
**Tipo:** Teste funcional manual  
**Ambiente:** React + TypeScript + Vite (localhost)  
**Status:** Aprovado nos cenários executados

## 1. Objetivo

Verificar se o formulário aceita anos de fabricação inteiros entre 1900 e o ano atual, inclusive, rejeitando valores fora do intervalo e entradas decimais.

## 2. Pré-condições

- Aplicação disponível no navegador.
- Placa preenchida com `ABC1D23`.
- Modelo preenchido com `Civic`.
- Campo Ano utilizado conforme cada cenário.

## 3. Resultados

| ID | Ano | Resultado esperado | Status |
|---|---|---|---|
| CT-013 | 1899 | Rejeitar: abaixo do mínimo | OK |
| CT-014 | 1900 | Aceitar: limite inferior | OK |
| CT-015 | 1901 | Aceitar: próximo ao mínimo | OK |
| CT-016 | 2025 | Aceitar: próximo ao máximo | OK |
| CT-017 | 2026 | Aceitar: limite superior | OK |
| CT-018 | 2027 | Rejeitar: acima do máximo | OK |
| CT-019 | 0 | Rejeitar: abaixo do mínimo | OK |
| CT-020 | -1 | Rejeitar: valor negativo | OK |
| CT-021 | 2020.5 | Rejeitar: valor decimal | OK |

## 4. Resultado consolidado

- Casos executados: 9
- Casos aprovados: 9
- Casos reprovados: 0
- Taxa de aprovação: 100%

## 5. Observações

Todos os cenários apresentaram comportamento conforme o esperado na execução manual relatada.

No CT-021, a rejeição de valores decimais pode ocorrer por validação nativa do navegador. Ainda não foi isoladamente comprovado se o bloqueio foi realizado pela função JavaScript.

## 6. Conclusão

Os nove cenários planejados para o RF-004 foram aprovados. Não foram relatados defeitos nesta rodada.

A aprovação se limita aos cenários executados e não comprova persistência em banco de dados.

## 7. Evidências

Pendente de anexação das capturas de tela das execuções.