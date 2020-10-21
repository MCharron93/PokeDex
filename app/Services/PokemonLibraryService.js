import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokedexApi } from "./AxiosService.js";

class PokemonLibraryService {
  constructor() {
    // console.log("Pokemon Library Service connected");
    this.getPokemonLibrary()
  }

  async getPokemonLibrary() {
    let res = await pokedexApi.get("?limit=151")
    // console.log(res.data);
    ProxyState.pokemonLibrary = res.data.results
    // console.log(ProxyState.pokemonLibrary);
  }
  async inspectPokemon(name) {
    let res = await pokedexApi.get(name)
    // console.log(res.data)
    ProxyState.currentPokemon = new Pokemon(res.data)
    // console.log(ProxyState.currentPokemon)
  }

}

export const pokemonLibrary = new PokemonLibraryService();

