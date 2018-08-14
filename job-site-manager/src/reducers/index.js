import { combineReducers } from 'redux';
import userReducer from './userReducer';
import companyReducer from './companyReducer';
import jobReducer from './jobReducer';


const rootReducer = combineReducers(
  {
    userState: userReducer,
    companyState: companyReducer,
    jobState: jobReducer
  }
)

export default rootReducer
