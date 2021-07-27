import {combineReducers} from 'redux';

import getCountryDataReducer from './getCountryDataReducer';
import getWeatherDataReducer from './getWeatherDataReducer';

const rootReducer = combineReducers({
  getCountryDataReducer,
  getWeatherDataReducer,
});

export default rootReducer;
