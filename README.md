# Banco API - Testes de Performance com K6

Repositório de testes de performance da aplicação [Banco API](https://github.com/juliodelimas/banco-api), utilizando **JavaScript** e a ferramenta **K6**.  

Este projeto tem como objetivo validar a performance dos endpoints expostos pela API, garantindo escalabilidade e identificando gargalos.

---

## 🛠 Tecnologias Utilizadas

- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [K6](https://k6.io/) – ferramenta de testes de carga e performance
- Variáveis de ambiente para configuração dinâmica (ex: `BASE_URL`)

---

## 📂 Estrutura do Repositório

```bash
banco-api-performance/
│
├── fixtures/             # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/              # Funções auxiliares (autenticação)
├── scripts/              # Arquivos de testes de performance organizados por cenário
├── reports/              # Diretório sugerido para salvar relatórios exportados
├── utils/                #Funções utilitárias reutilizaveis
├── config/               #Arquivos de configuração de variáveis de ambiente
└── README.md             # Documentação do projeto
```

---

## 🎯 Objetivo de Cada Grupo de Arquivos

- **helpers/**  
  Contém funções reutilizáveis que apoiam a execução dos cenários (por exemplo, obtenção de token de autenticação).

- **scripts/**  
  Contém os testes de performance organizados por tipo de cenário: smoke, load, stress, spike, etc.

- **reports/**  
  Diretório destinado a relatórios exportados em HTML ou JSON gerados durante a execução.

---

## ⚙️ Instalação

### Pré-requisitos
- Node.js instalado (versão 18 ou superior recomendada)
- [K6](https://k6.io/docs/get-started/installation/) instalado no ambiente

### Passos
```bash
# Clone o repositório
git clone https://github.com/patgomdatos/banco-api-performance.git

# Entre na pasta
cd banco-api-performance

#Configura as Variáveis de Ambiente
Altere o arquivo 'config.local.json' e defina a URL base da API a ser testada:

.json
{
    "baseUrl": "http://localhost:3000"
}

> Essas variaveis serão usadas dinamicamente nos testes para montar as requisições.

```

---

## 🚀 Execução

```bash
K6 run tests/login.test.js

A variável de ambiente `BASE_URL` **deve ser informada** para que os testes sejam executados corretamente, apontando para a API que deseja validar, caso não esteja usando o 'config.localjson'.

```bash
k6 run tests/autenticacao/login.test.js -e BASE_URL="http://localhost:3000"

Você pode ativar o modo dashboard do K6 e exportar o relatório ao final do test:

```bash
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
K6 run tests/autenticacao/login.test.js \
-e BASE_URL=http://localhost:3000

Após a execução, o relatório estará salvo como 'html-report.html'.

```

Após a execução, o relatório será salvo no diretório `html-report.html'`.

---

## 📎 Referências

- [K6 Documentation](https://k6.io/docs/)
- [Banco API - Repositório Principal](https://github.com/juliodelimas/banco-api)
