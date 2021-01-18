<h1 align="center">
    <img alt="CallLife" src="https://github.com/jonaspereirar/callingapp/blob/master/PlanTu.png?raw=true" width="800px" />

</h1>
<p align="center">Hackathon CCR 🚀🚀🚀</p>

<p align="center">
  <a href="#-instalacao-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Instalação e execução da api

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd api`;
3. Rode `npx` para instalar as dependências;
4. Crie uma imagem docker no terminal na porta 5432 ex: 
- docker run --name plantu -e POSTGRES_PASSWORD=docker -p 5432:5432 -d -t postgres
5. Para os processos em fila, crie em seu terminal uma imagem do docker para o Redis na porta 6379 por exemplo:
- docker run --name redisbarber -p 6379:6379 -d -t redis:alpine

digite docker -a para listar as imagens
6. Rode `npx start` para iniciar o servidor.

- Segue ficheiro Insominia para testar a api.
- Ultilize a GI do postbird para visualisar o seu banco de dados.
https://github.com/Paxa/postbird


## 🚀 Instalação e execução da mobo

- Com o emulador aberto siga os passos:
1. Entre na pasta rodando `cd mobile`;
2. Rode `npx` para instalar as dependências;
3. rode `react-native run-android` para gerar o Metro Bundler in React native
4. rode `react-native start`para startar o app


## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## Tools used api
- express
- nodemon
- hub CLI
- sequelize - sequelize.CLI

## Tools used mobo e mobile
- react
- react-native
- React-navigation V5
- sequelize - sequelize.CLI

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by team PlanTu :wave: Thaís Paixão, Rodrigo Marques, Jessica Borges, Jonas Rodrigues, Flávia de Castro, Louize B.


Figma: https://www.figma.com/file/9qbk1fkHQ68XI1gYx1Dz2P/PlanTu?node-id=24%3A52

<img src="https://github.com/jonaspereirar/callingapp/blob/master/feed.png?raw=true" width="800px" />
<img src="https://github.com/jonaspereirar/callingapp/blob/master/perfil.png?raw=true" width="800px" />
<img src="https://github.com/jonaspereirar/callingapp/blob/master/mapeamento.png?raw=true" width="800px" />
<img src="https://github.com/jonaspereirar/callingapp/blob/master/perfilDoCadastro.png?raw=true" width="800px" />
<img src="https://github.com/jonaspereirar/callingapp/blob/master/mapa.png?raw=true" width="800px" />



