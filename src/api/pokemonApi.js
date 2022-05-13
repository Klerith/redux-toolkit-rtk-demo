import axios from 'axios';


export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});