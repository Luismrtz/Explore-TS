import { ActionType } from '../action-types';

// interface SearchAPIAction {
//   type: ActionType.SEARCH_API;
// }

// interface SearchAPISuccessAction {
//   type: ActionType.SEARCH_API_SUCCESS;
//   payload: string[];
// }

// interface SearchAPIErrorAction {
//   type: ActionType.SEARCH_API_ERROR;
//   payload: string;
// }



export type PokemonType = {
    abilities: PokemonAbility[], 
    sprites: PokemonSprites,
    stats: PokemonStat[]
  }
  
  export type PokemonAbility = {
    ability: {
        name: string
        url: string
    }
  }
  
  export type PokemonSprites = {
    front_default: string
  }
  
  export type PokemonStat = {
    base_stat: number,
    stat: {
        name: string
    }
  }
  
  
  
  export interface SearchAPIAction {
    /// typeof points to LITERAL type instead of the 'string' value
    type: typeof ActionType.SEARCH_API
  }
  
  export interface SearchAPIErrorAction {
    type: typeof ActionType.SEARCH_API_ERROR
    // payload: string;
  }
  
  export interface SearchAPISuccessAction {
    type: typeof ActionType.SEARCH_API_SUCCESS,
    payload: PokemonType
  
  }

export type Action =
  | SearchAPIAction
  | SearchAPISuccessAction
  | SearchAPIErrorAction;
