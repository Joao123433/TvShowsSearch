# Aplicativo de Informações sobre Shows de TV
- Este repositório contém um aplicativo web simples que permite aos usuários buscar informações sobre shows de TV utilizando a API do TVMaze. A aplicação fornece detalhes sobre o show, incluindo sua imagem, título e classificação média. Além disso, ela exibe até três shows correspondentes à pesquisa do usuário.

## funcionalidade
- `Buscar Shows de TV:` Os usuários podem inserir o nome de um show no campo de entrada para obter informações.
- `Exibir Informações do Show:` A aplicação exibe informações básicas sobre o show, como imagem, título e classificação média.
- `Listar Shows Correspondentes:` Ao pesquisar por um show, a aplicação lista até três shows correspondentes, incluindo a imagem, o título e a classificação média.

## Dependências
A aplicação utiliza a [API do TVMaze][https://www.tvmaze.com/api] para obter informações sobre shows de TV.

## Estrutura do Código
- `fetchShows(nameShow: string):` Obtém informações sobre o show na API do TVMaze.
- `getShowName():` Obtém o valor inserido pelo usuário no campo de entrada.
- `tratamentErrorGetShowName():` Trata erros ao obter o nome do show e exibe mensagens de erro.
- `printingError(erro: string):` Oculta elementos da interface principal e exibe uma mensagem de erro personalizada.
- `clearError():` Restaura a visibilidade dos elementos principais e oculta a mensagem de erro.
- `createDiv(id: string):` Cria e retorna um elemento <div> com o ID fornecido.
- `createImage(src):` Cria e retorna um elemento <img> com a URL da imagem do show. Se a imagem não estiver disponível, exibe uma imagem padrão.
- `createTitle(id: string, showName: string):` Cria e retorna um elemento <h1> com o ID fornecido e o nome do show
- `createRating(id: string, rating: string):` Cria e retorna um elemento <p> com o ID fornecido e a classificação média do show.
- `ubmitShowName(ev: { preventDefault: () => void }):` Manipula o evento de envio do formulárioe e trata erros e chama a função para exibir as informações.
- `settingVales(shows):`  Exibe informações dos shows na interface do usuário.

## Link pro projeto
- https://joao123433.github.io/TvShowsSearch/