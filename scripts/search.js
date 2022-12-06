"use strict"

window.onload = function(){
    // populate dropdown
    document.getElementById("pokeSlct") = pokeDropdown();

    // onchange event
    document.getElementById("pokeSlct").onchange = onchangePokeSelect();

    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(response => response.json)
    .then(data => {
    for(let i = 0; i < data.length; i++){
        
    }
    });
}   

function pokeDropdown(){

}

function onchangePokeSelect(){

}

//pokedexDisplay