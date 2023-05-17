
//objeto que representa as funções utilizadas com a pokeApi
const pokeApi = {};

function convertPokeApiToMyPokemon(pokeData){
    const pokemon = new MyPokemon();
        pokemon.number = pokeData.order;
        pokemon.name = pokeData.name;

        const types = pokeData.types.map( (typeSlot) => typeSlot.type.name );
        const [type] = types;

        pokemon.types = types;
        pokemon.mainType = type; 
        pokemon.picture = pokeData.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getInfoPokemon = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json()) //getting the JSON version of the 'pokeData'
        .then(convertPokeApiToMyPokemon)
        .catch( (error) => console.log(error) );
}

//requiring pokemons from pokeApi
pokeApi.getPokemon = (Offset = 0, Limit = 10) => {
    //Setting the PokeAPI URL
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then( (response) => response.json()) //convertendo a resposta pra uma promessa de objeto JSON
        .then( (jsonBody) => jsonBody.results) //pegando só uma lista de resultados do JSON
        .then( (pokemons) => pokemons.map(pokeApi.getInfoPokemon))//fetching and listing pokemon promises 
        .then( (infoRequests) => Promise.all(infoRequests) ) //esperando todas as promessas serem resolvidas
        .then( (infoPokemons) => infoPokemons) //retornando os resultados das promessas (essa linha é só de enfeite)
        .catch( (error)=>console.log(error));
}