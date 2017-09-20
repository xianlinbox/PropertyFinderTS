import {createStore, combineReducers, Store as ReduxStore} from 'redux';
import { Store } from './store'

function initReducers() {
  const propertyReducer = require('../property/reducers/propertyReducers').default;

  return combineReducers({
    property: propertyReducer
  });
}


export default function configStore() {
  const rootReducer = initReducers();
  const store: ReduxStore<Store.All> = createStore(rootReducer);
  return store
}
