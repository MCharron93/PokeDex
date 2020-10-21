import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { myPokemonApi } from "./AxiosService.js";


class MyPokemonService {
  constructor() {
    console.log("My Pokemon Service");
  }
  async addPokemon() {
    let res = await myPokemonApi.post("", ProxyState.currentPokemon)
    console.log(res)
  }
}

export const myPokemon = new MyPokemonService()