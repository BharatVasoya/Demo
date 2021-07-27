import {
  GET_COUNTRY_DATA_SUCCESS,
  GET_COUNTRY_DATA_FAILURE,
  GET_COUNTRY_DATA_WATCHER,
} from '../../constant';

export function getCountryDataWatcher(payload, resolve, reject) {
  return {type: GET_COUNTRY_DATA_WATCHER, payload, resolve, reject};
}

export function getCountryDataSuccess(payload) {
  return {type: GET_COUNTRY_DATA_SUCCESS, payload: payload};
}

export function getCountryDataError(error) {
  return {type: GET_COUNTRY_DATA_FAILURE, payload: error};
}
