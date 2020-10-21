import { ProxyState } from "../AppState.js";
import { pokemonLibrary } from "../Services/PokemonLibraryService.js";


// Private
function _draw() {
  // console.log("test");
  let template = ""
  let pokemonLibrary = ProxyState.pokemonLibrary
  pokemonLibrary.forEach(p => template += /*html*/ `<li onclick="app.pokemonLibraryController.inspectPokemon('${p.name}')">${p.name}</li>`)
  document.getElementById("pokemon-library").innerHTML = template
}

//Public
export default class PokemonLibraryController {
  constructor() {
    // console.log("Pokemon Library Controller connected");
    ProxyState.on("pokemonLibrary", _draw);
    _draw()
  }

  getPokemonLibrary() {
    try {
      pokemonLibrary.getPokemonLibrary()
    } catch (error) {
      console.error(error)
    }
  }

  inspectPokemon(index) {
    try {
      pokemonLibrary.inspectPokemon(index)
    } catch (error) {
      console.error(error)
    }
  }
}
