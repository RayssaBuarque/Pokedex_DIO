
//objeto que representa as funções utilizadas com a pokeApi
const pokeApi = {};

pokeApi.getInfoPokemon = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .catch( (error) => console.log(error) );
}

//requisição de pokemons da pokeApi
pokeApi.getPokemon = (Offset = 0, Limit = 10) => {
    //Setando o URL da PokeAPI
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then( (response) => response.json()) //convertendo a resposta pra uma promessa de objeto JSON
        .then( (jsonBody) => jsonBody.results) //pegando só uma lista de resultados do JSON
        .then( (pokemons) => pokemons.map(pokeApi.getInfoPokemon))//fetchando promessas dos pokemons 
        .then( (infoRequests) => Promise.all(infoRequests) ) //esperando todas as promessas serem resolvidas
        .then( (infoPokemons) => infoPokemons) //retornando os resultados das promessas (essa linha é só de enfeite)
        .catch( (error)=>console.log(error));
}