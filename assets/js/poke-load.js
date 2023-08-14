
const pokeId = sessionStorage.getItem('id')

carregandoPokemon(pokeId)

function carregandoPokemon(pokeId){
    const pokemon = pokeApi.getPokeData(pokeId).then( (pokemon) =>{

        //setando o título da página
        document.querySelector('title').textContent = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

        //setando id do pokemon
        document.getElementById('pokeId').innerHTML = '#' + pokemon.id;

        //setando nome do pokemon
        document.getElementById("nomePokemon").innerHTML = pokemon.name

        //setando a imagem do pokemon
        document.getElementById("imagePokemon").innerHTML += `<img src = '${pokemon.sprites.other.dream_world.front_default}' alt='Imagem do Pokémon.'>`
        
        //setando tipo do pokemon
        document.getElementById('types').innerHTML = pokemon.types.map( (typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>` ).join('');

    }).catch( (error) => console.log(error))
}

function retornarPokedex(){
    window.open('../../index.html', '_self');
}