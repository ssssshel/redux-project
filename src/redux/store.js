import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

// SE IMPORTA UNICAMENTE AL REDUCER DE CADA MÓDULO
import pokeReducer from './pokeDucks'

// rootReducer contiene todos los reducers que se importan
const rootReducer = combineReducers({
  pokemones: pokeReducer
})

// CONFIGURACION EXT CHROME
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CREACIÓN DE LA STORE
export default function generateStore(){
  const store = createStore( rootReducer, composeEnhacers( applyMiddleware(thunk) ) )
  return store
}