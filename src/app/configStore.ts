import {createStore, combineReducers, Store as ReduxStore} from 'redux';
import { Store } from './store'

function initReducers() {
  const propertyReducer = require('../property/reducers/propertyReducers');
  const loadingReducer = require('../shared/reducers/loadingReducer');
  const errorReducer = require('../shared/reducers/errorReducer');

  return combineReducers({
    errorMessage: errorReducer,
    isLoading: loadingReducer,
    property: propertyReducer
  });
}


export default function configStore() {
  const rootReducer = initReducers();
  const store: ReduxStore<Store.All> = createStore(rootReducer);
  return store
}
