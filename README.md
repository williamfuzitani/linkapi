# Teste Técnico - LinkApi

**OBJETIVO:** Construção de uma API RESTful usando a tecnologia NodeJS.

**REQUISITOS:**

- Criar contas testes nas plataformas Pipedrive e Bling.
- Criar uma integração entre as plataformas Pipedrive e Bling (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).
- Criar banco de dados Mongo, existem serviços como MongoDB Atlas para criar de graça.
- Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.
- Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Install

```
yarn install
```

## Usage

Rename **_.env.example_** to **_.env_** and fill the fields with your credencials before proceeding.

```
yarn start
```
