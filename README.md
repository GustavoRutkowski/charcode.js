# 🧠📚 CharCode.js

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen?logo=jest)
![License](https://img.shields.io/badge/license-MIT-lightgrey)
![Contributions](https://img.shields.io/badge/contributions-welcome-orange)

Este repositório reúne resoluções de questões da **CharCode (IFSul Charqueadas)** com foco em resolver cada uma das provas utilizando JavaScript, com o objetivo de treinar estruturas de dados e algoritmos além de disponibilizar um material de estudos para programação competitiva.

---

## 📑 Sumário

* [📁 Estrutura de Pastas](#-estrutura-de-pastas)
* [▶️ Como Rodar as Questões](#️-como-rodar-as-questões)
* [🧪 Como Rodar os Testes](#-como-rodar-os-testes)
* [🤝 Como Contribuir](#-como-contribuir)
* [✅ Progresso](./PROGRESS.md)

---

## 📁 Estrutura de Pastas

```
questions/
 ├── 2015/
 │    ├── tests/                   --> Chamada dos testes automatizados
 │    │    ├── problemaA.test.js
 │    │    └── problemaB.test.js
 │    ├── cli/                     --> Chamada da função de resolução
 │    │    ├── problemaA.cli.js
 │    │    └── problemaB.cli.js
 │    ├── problemaA.js
 │    ├── problemaB.js
 │    ├── ...
 │    └── statement.pdf            --> Prova em PDF
 ├── 2016/
 └── ...
```

---

## ▶️ Como Rodar as Questões

Cada questão possui:

* Um arquivo principal:
  `question_name.js`

* Um CLI correspondente:
  `/cli/question_name.cli.js`

### 📥 Passo a passo:

1. Crie um arquivo `input.txt` em qualquer diretório
2. Insira os dados de entrada correspondentes
3. Execute:

```bash
node questions/{ano}/cli/{question_name}.cli.js < input.txt

# 💡 e.g.:
node questions/2015/cli/catapimbas.cli.js < input.txt
```

---

## 🧪 Como Rodar os Testes

Comandos utilitários para execução de testes automatizados das questões.

```bash
npm run test                                          # Todos os testes de todas as questões de uma vez
npm run test questions/2015/tests/catapimbas.test.js  # Um único arquivo de testes
```

---

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! 🚀

Você pode:

* 🐛 Reportar bugs
* 💡 Sugerir melhorias
* ⚡ Otimizar soluções
* 🧪 Adicionar testes

### Passos:

1. Faça um fork do projeto
2. Crie uma branch
3. Faça suas alterações
4. Abra um Pull Request
