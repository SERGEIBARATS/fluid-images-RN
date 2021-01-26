import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import Reactotron from '../ReactotronConfig';

let storeInstance: any;

export default function () {
  if (storeInstance) {
    return storeInstance;
  }
  const middlewares = [];

  if (__DEV__) { // Check if it's development mode
  storeInstance = createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware), Reactotron.createEnhancer()));
}
else {
  storeInstance = createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware)));

}

  
  return storeInstance;
}
