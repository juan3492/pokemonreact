import { createStore } from "redux";

const initialState = {
    loading: false,
    error: "",
    showerror: false,
    pokename: "",
    browserinfo: {
        "id": 25,
        "is_default": true,
        "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/25/encounters",
        "name": "pikachu",
        "order": 35,
        "species": {
          "name": "pikachu",
          "url": "https://pokeapi.co/api/v2/pokemon-species/25/"
        },
        "sprites": {
          "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
          "back_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
          "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
          "back_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          "front_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
          "front_shiny_female": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
        },
        "stats": [
          {
            "base_stat": 90,
            "effort": 2,
            "stat": {
              "name": "speed",
              "url": "https://pokeapi.co/api/v2/stat/6/"
            }
          },
          {
            "base_stat": 50,
            "effort": 0,
            "stat": {
              "name": "special-defense",
              "url": "https://pokeapi.co/api/v2/stat/5/"
            }
          },
          {
            "base_stat": 50,
            "effort": 0,
            "stat": {
              "name": "special-attack",
              "url": "https://pokeapi.co/api/v2/stat/4/"
            }
          },
          {
            "base_stat": 40,
            "effort": 0,
            "stat": {
              "name": "defense",
              "url": "https://pokeapi.co/api/v2/stat/3/"
            }
          },
          {
            "base_stat": 55,
            "effort": 0,
            "stat": {
              "name": "attack",
              "url": "https://pokeapi.co/api/v2/stat/2/"
            }
          },
          {
            "base_stat": 35,
            "effort": 0,
            "stat": {
              "name": "hp",
              "url": "https://pokeapi.co/api/v2/stat/1/"
            }
          }
        ],
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "electric",
              "url": "https://pokeapi.co/api/v2/type/13/"
            }
          }
        ],
        "weight": 60
      },
    poketeam:[],
    showreview:false,
}

const reducerTeam = (state = initialState, action) =>{
    switch(action.type) {
      case "POKENAME_CHANGE":
        return{
          ...state,
          pokename: action.input
        }
      case "POKENAME_REQUEST":
        return {
          ...state,
          loading: true,
          error: ''
        }
      case "GET_DATA_SUCCESS":
        return{
          ...state,
          loading: false,
          browserinfo: action.payload,
          error: ''
        }
      case "GET_DATA_ERROR":
        return{
          ...state,
          loading: false,
          error: action.error,
          showerror: true
        }
      case "ADD_POKEMON":
        if(state.poketeam.length <= 5){
          if (state.poketeam.length === 5){
            return{
              ...state,
              poketeam: state.poketeam.concat(action.newpokemon),
              showreview: true
            }
          }else{
            return{
              ...state,
              poketeam: state.poketeam.concat(action.newpokemon),
              showreview: false
            }
          }
        }
        else{
          return{
            ...state,
            showerror: true,
            error: "Tu equipo no puede superar los 6 integrantes"
          }
        }
      case "DELETE_POKEMON":
        return{
          ...state,
          poketeam: state.poketeam.filter(p => p.id !== action.pokemon.id),
          showreview: false,
        }
      case "CLOSE_ERROR":
        return{
          ...state,
          showerror: false,
          error: "",
        }
      default:
    }
    return state
}


export default createStore(reducerTeam)