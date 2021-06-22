import { put, apply, call } from 'redux-saga/effects';

export function* fetchEntity(entity: any, apiFn: any, body: any, action: any) {
  const initialActionPayload = action.payload;
  const {data: response, status} = yield apply(null, apiFn, [...body]);
  let error;
  if(status === 200) {
    yield put(entity.success(response, initialActionPayload));
  } else {
    error = 'Oops! pleae try again later. '
    yield put(entity.failure(error));
  }
  return { response, error}
}