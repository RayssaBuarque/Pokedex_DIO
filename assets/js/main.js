//variáveis de início e limite dos ids de pokemon requisitados
var offset = 0;
var limit = 10;

function convertPokemonTypesHtmlLi(pokemonTypes){
    return pokemonTypes.map( (typeSlot) => `<li class="type">${typeSlot.type.name}</li>` ); 
}

//funcao q converte uma array json em html
function convertPokemonHtmlLi(pokemon){
    return `<li class="pokemon">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="pokeInfo">
                    <!--Lista Ordenada de classificações do Pokemon-->
                    <ol class="types">
                        ${convertPokemonTypesHtmlLi(pokemon.types).join('')}
                    </ol>
                    <img src ="${pokemon.sprites.other.dream_world.front_default}"
                        alt ="${pokemon.name}">
                </div>
            </li>`;
}

pokeApi.getPokemon(offset, limit)
    .then( (pokemonList = []) => { //inserindo os pokemons recebidos no html
        
        //add todo pokemon html numa lista
        let itensLista = pokemonList.map(convertPokemonHtmlLi);

        //juntando todos os itens e inserindo no DOM
        const elementosHtml = itensLista.join('');
        document.getElementById('listaPokemon').innerHTML += elementosHtml;
    })
    .catch( (error) => console.log(error));
    //.finally( () => console.log('**********************\n Requisição Concluída \n Tudo certo por aqui! \n**********************'));
