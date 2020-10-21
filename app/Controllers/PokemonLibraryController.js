import { ProxyState } from "../AppState.js";
import { pokemonLibrary } from "../Services/PokemonLibraryService.js";


// Private
function _draw() {
  console.log("test");

}

//Public
export default class PokemonLibraryController {
  constructor() {
    // console.log("Pokemon Library Controller connected");
    ProxyState.on("pokemonLibrary", _draw);
    _draw()
  }


}
