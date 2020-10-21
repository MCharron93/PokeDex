export default class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.types = data.types[0]
        this.height = data.height
        this.weight = data.weight
        this.img = data.img || data.sprites.front_default

        if (typeof (this.types) != "string") {
            this.types = data.types[0].type.name
        }
    }

    get Template() {
        return /*html*/ `
        <div class="card">
            <img src="${this.img}" class="card-img-top img-fluid">
            <div class="card-body">
            <h3 class="card-title"># ${this.id} : ${this.name.toUpperCase()}</h3>
            <p class="card-text">Type: ${this.types.toUpperCase()}</p>
            <p class="card-text">Weight: ${this.weight}</p>
            <p class="card-text">Height: ${this.height}</p>
            <button class="btn btn-success" onclick="app.myPokemonController.addPokemon()">Log Pokemon?</button>
            </div>
        </div>
`}


}
