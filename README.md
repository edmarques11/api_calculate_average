## Api cálculo de média

### Pré requisitos para executar a plicação
- [NodeJS](https://nodejs.org/pt) versão 20

### Passos para executar o projeto localmente
- Clonar o repositório
- Executar o comando de instalação com npm
```bash
npm install
```
- Executar o comando `dev` para iniciar o servidor
```bash
npm run dev
```
### Comandos adicionais
- Para executar a suite de testes da aplicação:
```bash
npm run test
```
### Para acessar a documentação da api
- Executar o comando `npm run dev`
- Abrir no seu navedor de preferência a url [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### URL da aplicação online
- Delay de aproximadamente 50s na primeira chamada, limitação do servidor.
- [https://calculate-average.onrender.com/api](https://calculate-average.onrender.com/api)

### Funcionalidades desenvolvidas
- Enpoint para cálculo de média aritmética entre até 1000 números
- Validação de dados da requisição com [yup](https://www.npmjs.com/package/yup/v/1.0.0-alpha.3)
- Teste unitários para a classe que realiza os cálculos