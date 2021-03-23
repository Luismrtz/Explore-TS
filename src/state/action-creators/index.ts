import axios from 'axios';
import { Dispatch} from 'redux';
import { ActionType } from '../action-types';
import { Action, 
    // DetailAction 
} from '../actions';

export const SearchApi = (apis: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.SEARCH_API
    });
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${apis}`)
 
        dispatch({type: ActionType.SEARCH_API_SUCCESS, payload: data})
    } catch (err) {
        dispatch({type: ActionType.SEARCH_API_ERROR,
            //  payload: err.message
            });
    }
}

//! TBA
// export const PriceDetails = (Prices: Array<any>) => (dispatch: Dispatch<DetailAction>) => {
//     dispatch({ type: ActionType.PRICE_DETAILS});
//     try {
        

//         dispatch({type: ActionType.PRICE_DETAILS_SUCCESS, payload: {Prices}});
//     } catch (err) {
//         dispatch({type: ActionType.PRICE_DETAILS_ERROR});
//     }
// }
