export default class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.type = data.types
        this.height = data.height
        this.weight = data.weight
        this.imgUrl = data.sprites.front_default
    }


}
