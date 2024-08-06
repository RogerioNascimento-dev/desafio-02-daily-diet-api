# Desafio 02 Daily Diet API
## Desafio referente ao módulo: Criando APIs RESTfull com Node.js

#
### Features

- ✅ Criação de usuário
- ✅ Login de usuário
- ✅ Logout de usuário
- ✅ Criação de refeição
- ✅ Edição de refeição
- ✅ Atualização de refeição
- ✅ Exclusão de refeição
- ✅ Listar todas as refeições do usuário
- ✅ visualizar uma refeições específica do usuário
- ✅ Recuperar métricas de todas as refeições do usuário

#### Sumário
🟨 Pendente
✅ Concluído


## Routes

### User Routes `/user`

| Method | Route        | Description                     | Authentication Required |
| ------ | ------------ | ------------------------------- | ----------------------- |
| POST   | `/register`  | Create a new user               | No                      |
| POST   | `/login`     | Authenticate and login a user   | No                      |
| POST   | `/logout`    | logout user                     | Yes                     |


### Meal Routes `/meal`

| Method | Route           | Description                    | Authentication Required |
| ------ | --------------- | ------------------------------ | ----------------------- |
| GET    | `/:id`          | View a single meal             | Yes                     |
| GET    | `/`             | List all meals of a user       | Yes                     |
| POST   | `/`             | Create a new meal              | Yes                     |
| PUT    | `/:id`          | Update a meal                  | Yes                     |
| DELETE | `/:id`          | Delete a meal                  | Yes                     |
| GET    | `/metrics`      | Retrieve user meal metrics     | Yes                     |


