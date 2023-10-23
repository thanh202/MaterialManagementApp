import {combineReducers} from 'redux';
import productReducer from './productReducer';

const rootReducers = combineReducers({
  productReducer: productReducer,
});

export default rootReducers;
