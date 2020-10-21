export default class Pokemon {
    constructor(data) {
        this._id = data.id || data._id
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
            <h3 class="card-title"># ${this._id} : ${this.name.toUpperCase()}</h3>
            <p class="card-text">Type: ${this.types.toUpperCase()}</p>
            <p class="card-text">Weight: ${this.weight}</p>
            <p class="card-text">Height: ${this.height}</p>
            ${this.Button}
            </div>
        </div>
`}

    get Button() {
        if (this._id) {
            return /*html*/`
            <button class="btn btn-danger" onclick="app.myPokemonController.deletePokemon()">Delete Pokemon?</button>
        `} else {
            return /*html*/`
            <button class="btn btn-success" onclick="app.myPokemonController.addPokemon()">Log Pokemon?</button>
            `}
    }

}
