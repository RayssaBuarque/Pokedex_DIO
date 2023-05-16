
//objeto que representa as funções utilizadas com a pokeApi
const pokeApi = {};


//requisição de pokemons da pokeApi
pokeApi.getPokemon = (Offset = 0, Limit = 10) => {
    //Setando o URL da PokeAPI
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then( (response) => response.json()) //convertendo a resposta pra uma promessa de objeto JSON
        .then( (jsonBody) => jsonBody.results) //recebendo uma lista de resultados do JSON
        .catch( (error)=>console.log(error));
}