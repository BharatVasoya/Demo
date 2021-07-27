import {
  GET_COUNTRY_DATA_SUCCESS,
  GET_COUNTRY_DATA_FAILURE,
  GET_COUNTRY_DATA_WATCHER,
} from '../../constant';

const initialState = {
  getCountryDataError: null,
  getCountryDataLoader: false,
  getCountryDataData: [],
};

export default function getCountryDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY_DATA_WATCHER:
      return {
        ...state,
        getCountryDataLoader: true,
      };
    case GET_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        getCountryDataError: null,
        getCountryDataData: action.payload,
        getCountryDataLoader: false,
      };
    case GET_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        getCountryDataError: action,
        getCountryDataLoader: false,
      };
    default:
      return state;
  }
}
