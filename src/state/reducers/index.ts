import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
// import detailsReducer from './detailsReducer';

const reducers = combineReducers({
    apis: apiReducer,
    // Prices: detailsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;