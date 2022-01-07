import axios from 'axios';

// CONSTANTES

const dataInicial = {
  array: [],
  offset: 0
}


// TYPES

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'


// REDUCER

export default function pokeReducer(state = dataInicial, action){
  switch(action.type){
    case OBTENER_POKEMONES_EXITO:
      return {...state, array: action.payload}
    case SIGUIENTE_POKEMONES_EXITO:
      return {...state, array: action.payload.array, offset: action.payload.offset}
    default:
      return state
  }

}


// ACCIONES
// se utiliza dispatch puesto que este parametro activa el switch en la funcion del reducer

export const obtenerPokemonesAccion = () => async (dispatch, getState) => {

  const offset = getState().pokemones.offset

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    dispatch({
      type: OBTENER_POKEMONES_EXITO,
      payload: res.data.results
    })
  } catch (error) {
    console.log(error)
  }
}

export const siguientePokemonAccion = () => async (dispatch, getState) => {

  const offset = getState().pokemones.offset
  const siguiente = offset + 20

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`)
    dispatch({
      type: SIGUIENTE_POKEMONES_EXITO,
      payload: {
        array: res.data.results,
        offset: siguiente
      }
    })
  } catch (error) {
    console.log(error)
  }
}