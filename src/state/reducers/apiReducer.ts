import { ActionType } from '../action-types';
import { Action, PokemonType } from '../actions';

interface ApiState {
    loading: boolean;
    // error: string | null;
    data?: PokemonType
}

const initialState = {
    loading: false,
    // error: null,
   
}

const reducer = (
    state: ApiState = initialState,
    action: Action
): ApiState => {
    switch (action.type) {
        case ActionType.SEARCH_API:
            return {loading: true, 
                // error: null 
            };
        case ActionType.SEARCH_API_SUCCESS:
            return {loading: false,
                //  error: null,
                  data: action.payload};
        case ActionType.SEARCH_API_ERROR:
            return {loading: false,
                //  error: action.payload
                };
        default: 
        return state;
    }
};

export default reducer;