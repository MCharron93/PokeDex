import { ProxyState } from "../AppState.js"
import { myPokemon } from "../Services/MyPokemonService.js"

function _drawMyPokemon() {
  let template = ""
  let myPokemon = ProxyState.myPokemon
  myPokemon.forEach(p => template += /*html*/ `<li onclick="app.myPokemonController.getMyPokemon('${p.name}')">${p.name}</li>`)
  document.getElementById("pokemon-seen").innerHTML = template
}

export default class MyPokemonController {
  constructor() {
    // console.log("My Pokemon Controller");
    ProxyState.on("myPokemon", _drawMyPokemon)
    _drawMyPokemon()
  }

  getMyPokemon() {
    try {
      myPokemon.getMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  addPokemon() {
    try {
      myPokemon.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

}