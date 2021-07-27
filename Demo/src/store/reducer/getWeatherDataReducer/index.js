import {
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_WATCHER,
} from '../../constant';

const initialState = {
  getWeatherDataError: null,
  getWeatherDataLoader: false,
  getWeatherDataData: [],
};

export default function getWeatherDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DATA_WATCHER:
      return {
        ...state,
        getWeatherDataLoader: true,
      };
    case GET_WEATHER_DATA_SUCCESS:
      return {
        ...state,
        getWeatherDataError: null,
        getWeatherDataData: action.payload,
        getWeatherDataLoader: false,
      };
    case GET_WEATHER_DATA_FAILURE:
      return {
        ...state,
        getWeatherDataError: action,
        getWeatherDataLoader: false,
      };
    default:
      return state;
  }
}
