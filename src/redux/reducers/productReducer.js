import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../constants';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  console.log('action type - product reducer: ', action.type);
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {...state, products: null, loading: true, error: null};
    case GET_PRODUCT_SUCCESS:
      return {...state, products: action.payload, error: null, loading: false};
    case GET_PRODUCT_FAILURE:
      return {...state, products: null, error: action.payload, loading: false};
    default:
      return state;
  }
};

export default productReducer;
