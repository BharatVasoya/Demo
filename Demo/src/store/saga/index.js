import {all} from 'redux-saga/effects';

import {getCountryDataActionWatcher} from './getCountryData';
import {getWeatherDataActionWatcher} from './getWeatherData';

export default function* root() {
  yield all([getCountryDataActionWatcher(), getWeatherDataActionWatcher()]);
}
