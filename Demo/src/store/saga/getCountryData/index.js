import {takeLatest, put, call} from 'redux-saga/effects';

import {GET_COUNTRY_DATA_WATCHER} from '../../constant';

import {getCountryDataError, getCountryDataSuccess} from '../../action';

import {API_URL, SEARCH_URL} from '../../../axios/config';

function* ongetCountryData(getCountryDataAction) {
  let {payload, resolve, reject} = getCountryDataAction;
  try {
    const header = {
      'Content-Type': 'application/json',
    };

    const response = yield fetch(
      SEARCH_URL + API_URL.GET_COUNTRY_DATA + payload.country,
      {
        method: 'GET',
        headers: header,
        body: '',
      },
    ).then(res => res.json());

    yield put(getCountryDataSuccess(response));
    resolve(response);
  } catch (e) {
    yield put(getCountryDataError(e));
    reject(e);
  }
}

export function* getCountryDataActionWatcher() {
  yield takeLatest(GET_COUNTRY_DATA_WATCHER, ongetCountryData);
}
