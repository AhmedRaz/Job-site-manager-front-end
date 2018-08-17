import { combineReducers } from 'redux';
import userReducer from './userReducer';
import companyReducer from './companyReducer';
import jobReducer from './jobReducer';
import createJobReducer from './createJobReducer';


const rootReducer = combineReducers(
  {
    userState: userReducer,
    companyState: companyReducer,
    jobState: jobReducer,
    createJobState: createJobReducer
  }
)

export default rootReducer
