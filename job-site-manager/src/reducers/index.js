import { combineReducers } from 'redux';
import userReducer from './userReducer';
import companyReducer from './companyReducer';
import jobReducer from './jobReducer';
import createJobReducer from './createJobReducer';

//Combine and utilize multiple states and reducers in store.
const rootReducer = combineReducers(
  {
    userState: userReducer,
    companyState: companyReducer,
    jobState: jobReducer,
    createJobState: createJobReducer
  }
)

export default rootReducer
