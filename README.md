
# QA Engineering Lab
[![QA Engineering Lab - CI](https://github.com/SamuelDavi-Braga/samuel-qa-lab/actions/workflows/ci.yml/badge.svg)](https://github.com/SamuelDavi-Braga/samuel-qa-lab/actions/workflows/ci.yml)

Portfólio interativo de Quality Assurance desenvolvido
com React, TypeScript e Vite.

O projeto demonstra práticas de testes funcionais,
automação, documentação de casos de teste, gestão
de defeitos e integração contínua.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Vitest
- React Testing Library
- Git e GitHub
- GitHub Actions

## Funcionalidades

### Cadastro de Veículos

Ambiente de testes para validação de formulários.

Requisitos implementados:

- RF-002 — Campos obrigatórios
- RF-003 — Validação de placas
- RF-004 — Validação do ano de fabricação

### Explorador de Casos

Biblioteca com 20 casos de teste documentados,
incluindo filtros, busca, ordenação e passos de execução.

### Gestão de Defeitos

Documentação de defeitos identificados durante
o desenvolvimento, incluindo investigação,
correção, evidências e retestes.

### Histórico de Execuções

Registro das validações manuais realizadas
nas funcionalidades do próprio portfólio.

### Automação de Testes

Suítes automatizadas de regras de negócio e
testes de interface React.

## Resultados dos testes

| Categoria | Testes aprovados |
|---|---:|
| RF-002 — Campos obrigatórios | 4 |
| RF-003 — Validação de placas | 7 |
| RF-004 — Ano de fabricação | 9 |
| Interface React | 9 |
| **Total** | **29** |

Resultados referentes à execução automatizada
validada durante o desenvolvimento.

## Como executar o projeto

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Execute os testes automatizados:

```bash
npm run test:run
```

Execute o build:

```bash
npm run build
```

## Integração contínua

O projeto utiliza GitHub Actions para executar
automaticamente os testes e o build a cada
push ou pull request.

## Objetivo

Demonstrar conhecimentos práticos em Quality
Assurance, testes funcionais, automação de testes
e boas práticas de desenvolvimento de software.
