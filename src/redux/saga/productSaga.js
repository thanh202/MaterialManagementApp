import {put, takeLatest, call} from 'redux-saga/effects';
import {
  fetchProductFailure,
  fetchProductSuccess,
} from '../actions/productAction';
import {GET_PRODUCT_REQUEST} from '../constants';
import axios from 'axios';

function* fetchProducts() {
  try {
    const response = yield call(() =>
      axios.get('https://fakestoreapi.com/products/'),
    );
    console.log('fetch product - product saga: ', response.data); // Access 'data' directly
    yield put(fetchProductSuccess(response.data));
  } catch (error) {
    console.error('fetch product - product saga - error: ', error.message);
    yield put(fetchProductFailure(error));
  }
}

export default function* watchFetchProducts() {
  yield takeLatest(GET_PRODUCT_REQUEST, fetchProducts);
}
