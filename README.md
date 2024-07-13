# Projeto de Controle de Militares

Este é um projeto simples de controle de militares, desenvolvido com Vue.js, Vue Router e Tailwind CSS. O objetivo é gerenciar informações sobre militares, suas escalas de serviço e adicionar observações relevantes.

## Configurações recomendadas da IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desabilite Vetur).

## Funcionalidades

1. **Buscar Militares e Escalas**

   - A página "Buscar" permite visualizar todos os militares cadastrados e suas respectivas datas de serviço.
   - Os dados dos militares são carregados a partir de um arquivo JSON local (`database/database.json`).

2. **Cadastrar Escala**

   - Na página "Cadastrar", você pode adicionar uma nova data de serviço para um militar já cadastrado.
   - As datas de serviço são atualizadas no arquivo JSON.

3. **Observações**
   - A página "Observações" permite adicionar notas relacionadas aos militares.
   - Você pode registrar informações importantes, como observações sobre comportamento, treinamento ou outras considerações relevantes.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para construção de interfaces de usuário.
- **Vue Router**: Gerenciador de rotas para criar navegação entre as páginas do aplicativo.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.

## Configuração do Projeto

1. **Instalação das Dependências**

   - Certifique-se de ter o Node.js instalado em sua máquina.
   - Clone este repositório.
   - No diretório raiz do projeto, execute o seguinte comando para instalar as dependências:

     ```
     npm install
     ```

2. **Execução do Projeto**

   - Após a instalação das dependências, inicie o servidor de desenvolvimento com o seguinte comando:

     ```
     npm run dev
     ```

   - O aplicativo estará disponível em `http://localhost:5173`.

3. **Estrutura do Projeto**
   - Os componentes estão organizados na pasta `src/components`.
   - As páginas estão na pasta `src/views`.
   - O arquivo JSON com os dados dos militares está em `database/database.json`.

## Próximos Passos

Este projeto pode ser expandido com as seguintes melhorias:

- Adicionar autenticação de usuário (por exemplo, login com token JWT).
- Implementar validações para evitar datas duplicadas ou inválidas.
- Melhorar o design e a experiência do usuário.

Sinta-se à vontade para personalizar e adaptar este projeto conforme suas necessidades específicas. Se tiver alguma dúvida ou precisar de mais ajuda, estou à disposição! 😊
