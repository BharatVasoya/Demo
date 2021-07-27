import {
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_WATCHER,
} from '../../constant';

export function getWeatherDataWatcher(payload, resolve, reject) {
  return {type: GET_WEATHER_DATA_WATCHER, payload, resolve, reject};
}

export function getWeatherDataSuccess(payload) {
  return {type: GET_WEATHER_DATA_SUCCESS, payload: payload};
}

export function getWeatherDataError(error) {
  return {type: GET_WEATHER_DATA_FAILURE, payload: error};
}
