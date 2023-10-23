import {all} from 'redux-saga/effects';
import watchFetchProducts from './productSaga';

function* rootSaga() {
  yield all([watchFetchProducts()]);
}

export default rootSaga;
