import PokemonLibraryController from "./Controllers/PokemonLibraryController.js";

class App {
  pokemonLibraryController = new PokemonLibraryController();
}

window["app"] = new App();
