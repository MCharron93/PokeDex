import MyPokemonController from "./Controllers/MyPokemonController.js";
import PokemonLibraryController from "./Controllers/PokemonLibraryController.js";

class App {
  pokemonLibraryController = new PokemonLibraryController();

  myPokemonController = new MyPokemonController()
}

window["app"] = new App();
