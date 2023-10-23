import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from '../constants';

export const fetchProductRequest = () => {
  console.log('action - fetch product request');
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = products => {
  console.log('action - fetch product success: ', products);
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: products,
  };
};
export const fetchProductFailure = error => {
  console.log('action - fetch product failure: ', error.message);
  return {
    type: GET_PRODUCT_FAILURE,
    payload: error,
  };
};
