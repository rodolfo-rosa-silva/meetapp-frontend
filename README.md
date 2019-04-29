**MeetApp - GoStack5 Rocketseat**

**Sobre o repositório**

Este repositório se refere ao código do frontend da aplicação, feita em React JS, ele fica responsável por toda a parte de interface e interação do usuário.

**Dependência**

O projeto depende de uma API para realizar as requisições, a mesma por padrão deve estar no endereço http://localhost:3333, mas isso é configurável através do seguinte arquivo:

    /src/services/api.js

Basta alterar o endereço conforme desejar:

```
const api = axios.create({
baseURL:  'http://localhost:3333',
});
```

Para ambientar a API criada em conjunto com esse projeto, basta acessar o repositório:

https://github.com/rodolfo-rosa-silva/meetapp-backend

**Tecnologias utilizadas**

- React JS

- Redux

- Redux Saga

- Styled Components

- Reactotron

**Ambientação**

Primeiro, clone o projeto

    git clone git@github.com:rodolfo-rosa-silva/meetapp-frontend.git

Dentro da pasta do projeto, instale as dependências

    cd meetapp-frontend
    yarn

Agora inicie o servidor

    yarn start

Pronto! Agora você já pode acessar a aplicação através do seu http://localhost:3000
