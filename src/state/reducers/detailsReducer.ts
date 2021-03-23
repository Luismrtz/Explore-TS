//! tba
// import { ActionType } from '../action-types';
// import { DetailAction, PriceArr } from '../actions';

// interface DetailState {
//     loading: boolean;
//     // error: string | null;
//     data?: PriceArr
// }

// const initialState = {
//     loading: false,
//     // error: null,
   
// }

// const detReducer = (
//     state: DetailState = initialState,
//     action: DetailAction
// ): DetailState => {
//     switch (action.type) {
//         case ActionType.PRICE_DETAILS:
//             return {loading: true, 
//                 // error: null 
//             };
//         case ActionType.PRICE_DETAILS_SUCCESS:
//             return {loading: false,
//                 //  error: null,
//                   data: action.payload};
//         case ActionType.PRICE_DETAILS_ERROR:
//             return {loading: false,
//                 //  error: action.payload
//                 };
//         default: 
//         return state;
//     }
// };

// export default detReducer;

export {}