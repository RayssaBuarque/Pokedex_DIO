//variáveis de início e limite dos ids de pokemon requisitados
var offset = 0;
var limit = 10;

//funcao q converte uma array json em html
function convertPokemonHtmlLi(pokemon){
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="pokeInfo">
                    <!--Lista Ordenada de classificações do Pokemon-->
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src ="klayvem.png"
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
