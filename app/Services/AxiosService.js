// @ts-ignore
export const pokedexApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=50&limit=50",
  timeout: 10000
})