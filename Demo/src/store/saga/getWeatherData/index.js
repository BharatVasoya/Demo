import {takeLatest, put, call} from 'redux-saga/effects';

import {GET_WEATHER_DATA_WATCHER} from '../../constant';

import {getWeatherDataError, getWeatherDataSuccess} from '../../action';

import {API_URL, WEATHER_URL} from '../../../axios/config';

function* ongetWeatherData(getWeatherDataAction) {
  let {payload, resolve, reject} = getWeatherDataAction;
  try {
    const header = {
      'Content-Type': 'application/json',
    };

    const response = yield fetch(
      WEATHER_URL +
        API_URL.GET_WEATHER_DATA +
        `?access_key=77fcdcd1422259eae1f5d21c86db7151&query=${payload.city}`,
      {
        method: 'GET',
        headers: header,
        body: '',
      },
    ).then(res => res.json());

    yield put(getWeatherDataSuccess(response));
    resolve(response);
  } catch (e) {
    yield put(getWeatherDataError(e));
    reject(e);
  }
}

export function* getWeatherDataActionWatcher() {
  yield takeLatest(GET_WEATHER_DATA_WATCHER, ongetWeatherData);
}
