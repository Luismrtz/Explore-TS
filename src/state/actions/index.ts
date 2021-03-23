import { ActionType } from '../action-types';





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



  //? 
  //* price details
 //! TBA
  // export type PriceArr = {
  //     Prices: CardPrices[]
  // }

  // export type CardPrices = {
  //   newName: string,
  //   newPrice: number,
  //   cardId: number
  // }




  // export interface PriceDetailsAction {
  //   /// typeof points to LITERAL type instead of the 'string' value
  //   type: typeof ActionType.PRICE_DETAILS
  // }
  
  // export interface PriceDetailsErrorAction {
  //   type: typeof ActionType.PRICE_DETAILS_ERROR
  //   // payload: string;
  // }
  
  // export interface PriceDetailsSuccessAction {
  //   type: typeof ActionType.PRICE_DETAILS_SUCCESS,
  //   payload: PriceArr
  
  // }

  // export type DetailAction =
  // | PriceDetailsAction
  // | PriceDetailsErrorAction
  // | PriceDetailsSuccessAction;
