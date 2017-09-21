import { Action } from '../../shared/actions/sharedActions'
import { UPDATE_SEARCH_STRING } from '../actions/propertyActionTypes';
import { Store } from '../../app/store'

const initialState: Store.PropertyState = {
  request: { place_name: 'London'}
};

export default (state = initialState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        request: action.payload
      };
    default:
      return state;
  }
};
