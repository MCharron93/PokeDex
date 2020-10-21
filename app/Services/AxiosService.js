// @ts-ignore
export const pokedexApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
  timeout: 10000
})

// @ts-ignore
export const myPokemonApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/michelle/pokemon",
  timeout: 10000
})