import { combineReducers } from 'redux';

import customReducer from './custom.reducer';

// Combine with other reducers we may add in the future
const customApp = combineReducers({
  customData: customReducer,
});

export default customApp;
