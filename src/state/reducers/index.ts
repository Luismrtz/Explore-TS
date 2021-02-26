import { combineReducers } from 'redux';
import apiReducer from './apiReducer';

const reducers = combineReducers({
    apis: apiReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;