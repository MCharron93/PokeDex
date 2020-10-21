import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokedexApi } from "./AxiosService.js";

class PokemonLibraryService {
  constructor() {
    // console.log("Pokemon Library Service connected");
    this.getPokemonLibrary()
  }

  async getPokemonLibrary() {
    let res = await pokedexApi.get("")
    // console.log(res.data);
    ProxyState.pokemonLibrary = res.data.results
    console.log(ProxyState.pokemonLibrary);
  }
  async inspectPokemon(index) {
    let res = await pokedexApi.get(index)
    console.log(res.data.results)
  }

}

export const pokemonLibrary = new PokemonLibraryService();

