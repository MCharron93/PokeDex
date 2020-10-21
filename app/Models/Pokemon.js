export default class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.type = data.types[0].type.name
        this.height = data.height
        this.weight = data.weight
        this.imgUrl = data.sprites.front_default
    }

    get Template() {
        return /*html*/ `
        <div class="card">
            <img src="${this.imgUrl}" class="card-img-top img-fluid">
            <div class="card-body">
            <h3 class="card-title"># ${this.id} : ${this.name.toUpperCase()}</h3>
            <p class="card-text">Type: ${this.type.toUpperCase()}</p>
            <p class="card-text">Weight: ${this.weight}</p>
            <p class="card-text">Height: ${this.height}</p>
            <button class="btn btn-success" onclick="addPokemon()">Log Pokemon?</button>
            </div>
        </div>
`}


}
