# Desafio 2 - Semana 8 (plantPeace)

*Projeto da trilha de aprendizagem do programa de estágio da CompassUol, o qual se consiste em recriar uma página de vendas de plantas. Com rotas protegidas, responsividade e muito carisma, o projeto é um trabalho conjunto do Grupo 6 - "The Promissed Reactland".*

![Inicial plantpeace](https://github.com/KAndrade-SP/Desafio2-Semana8/assets/69699073/c250dbf4-97f8-4a86-93ad-c72a1ce32df9)

## Como utilizar ❔
*Passo a passo para execução do projeto*

1 - Você precisará ter o Nodejs (mínimo de versão: v16.16.0) instalado para executar os comandos de instalação de dependências do projeto.

2 - Após clonar o projeto ou fazer download do arquivo ZIP, acesse o diretório do projeto em um terminal de comando e execute o comando para instalar as dependências:

`npm install`

ou 

`yarn add`


3 - Após instalar as dependências do projeto, utilize o seguinte comando para executar via localhost:

`npm run dev`
  

> [!IMPORTANT]
> Observação: Este projeto utiliza JSON server para simular um banco de dados, então utilize os seguintes comandos para executar corretamente:
  
- Para instalar globalmente o json-server na versão utilizada neste projeto:

`npm install -g json-server@0.17.4`


- Para executar o json-server localmente na sua máquina:

`json-server --watch db.json`

> [!IMPORTANT]
> É de extrema importância que utilize os comandos "npm run dev" e "json-server --watch db.json" em dois terminais de comando diferentes, pois eles precisam rodar em conjunto para execução correta do projeto.


## Lista de Requerimentos do projeto 
- Utilize TypeScript para tipagem;
- Utilize [Clerk](https://clerk.com/docs/quickstarts/react);
- O ícone do perfil do usuário no componente de Header precisa ser importado do Clerk;
- [React Router](https://reactrouter.com/en/main) para criação das rotas, sendo que é necessário proteger as rotas;
- Crie controles deslizantes para exibição das plantas nas sessões da Home, em formato de Carrossel;
- [JSON Sever](https://github.com/typicode/json-server) para simular um database;
- Criar, no mínimo, um método POST e um método GET para preencher o “database” e ler as informações;
- Ao preencher o formulário de registro, as plantas devem ser renderizadas em tempo real nas duas sessões de plantas da página inicial;
- Caso uma planta tenha desconto, ela será renderizada na seção “Plants in Sale”. Você precisa usar a porcentagem do banco de dados JSON Server para calcular o desconto e exibir o preço final;
- Os campos de formulário devem ser todos validados;
- Ao clicar no cartão de uma planta, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- Você precisa criar uma página “About Us” que contenha informações sobre os desenvolvedores;
- A aplicação deve estar responsiva;
- Crie um repositório privado em seu Github e adicione os instrutores como colaboradores do projeto;
- Adicione um README ao seu projeto;
- Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado;
- Aplicar efeitos de Hover;
- Criar uma página (’Products’, que está na Header) para renderizar todas as plantas que estão em seu database;

## Colaboradores 
![compassBanner](https://github.com/KAndrade-SP/Desafio2-Semana8/assets/69699073/e4a4f42c-8bd2-463e-96c3-22e5a44ad844)
- 🧭[Brenda Gaudencio](https://github.com/brendagaudencio)
- 🧭[Bruno Noronha](https://github.com/chaosofmind)
- 🧭[Kaique Andrade](https://github.com/KAndrade-SP)
- 🧭[Lidia Messias](https://github.com/LidiaMessias)
- 🧭[Yan Augusto](https://github.com/YAN-AES) 


  
