import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  //this line allows use of redux devtools in chrome
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  //combine reducers using rootReducer
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
