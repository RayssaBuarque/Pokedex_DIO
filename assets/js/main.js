const btnVerMais = document.getElementById('btnVerMais');

//variáveis de início e limite dos ids de pokemon requisitados
var offset = 0;
var limit = 12;

//funcao q converte uma array json em html
function convertPokemonHtmlLi(pokemon){
    return `<li class="pokemon ${pokemon.mainType}" onclick="openPage('../assets/html/pokemon.html', ${pokemon.number})">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="pokeInfo">
                    <!--Lista Ordenada de classificações do Pokemon-->
                    <ol class="types">
                        ${pokemon.types.map( (typeSlot) => `<li class="type ${typeSlot}">${typeSlot}</li>` ).join('')}
                    </ol>
                    <img src ="${pokemon.picture}"
                        alt ="${pokemon.name}">
                </div>
            </li>`;
}

function carregandoPokemons(offset,limit){
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

}

carregandoPokemons(offset, limit);
btnVerMais.addEventListener('click', () =>{
    offset += limit;
    carregandoPokemons(offset, limit);
});


function openPage(path, pokeId){
    sessionStorage.setItem("id", pokeId);
    
    window.open(path, '_self');
}