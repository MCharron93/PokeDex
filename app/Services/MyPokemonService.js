import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { myPokemonApi } from "./AxiosService.js";


class MyPokemonService {
  constructor() {
    // console.log("My Pokemon Service");
    this.getMyPokemon()
  }
  async getMyPokemon() {
    let res = await myPokemonApi.get("")
    // console.log(res.data)
    ProxyState.myPokemon = res.data.data
  }
  async addPokemon() {
    let res = await myPokemonApi.post("", ProxyState.currentPokemon)
    // console.log(res.data.data)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
  }
}

export const myPokemon = new MyPokemonService()