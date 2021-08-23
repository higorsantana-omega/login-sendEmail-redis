# sendEmail with Redis
> Cadastro de usuário e envio de e-mail de confirmação de cadastro como tarefa em background utilizando Node.js e Redis

Com essa aplicação você é capaz de fazer envio de emails sem comprometer a execução e sobrecarga da sua aplicação principal.

## Instalação

**Você precisa instalar [Node.js](https://nodejs.org/en/download/) & [Yarn](https://yarnpkg.com/) antes de continuar a instalação.**

Clonar repositório

```
git clone https://github.com/higorsantana-omega/login-sendEmail-redis
```

Instale as dependências:

```
yarn install
```

Crie suas variáveis de ambiente com base nos exemplos de ```.env.example```

```
cp .env.example .env
```

Crie um docker com a imagem do Redis Alpine. O 6379 é a PORT

```
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

Execute o comando abaixo para iniciar o projeto em modo desenvolvimento:

```
yarn dev
```

## Histórico de lançamentos

* 1.0.0
    * Primeiro lançamento

## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/higorsantana-omega/login-sendEmail-redis/fork>)
2. Crie uma branch para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. Push (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

