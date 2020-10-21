import { ProxyState } from "../AppState.js"
import { myPokemon } from "../Services/MyPokemonService.js"

export default class MyPokemonController {
  constructor() {
    console.log("My Pokemon Controller");
  }

  addPokemon() {
    try {
      myPokemon.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

}