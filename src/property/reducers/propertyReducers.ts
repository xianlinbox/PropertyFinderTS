import { Action } from '../actions/propertyActionTypes'
import { Store } from '../../app/store'

const initialState: Store.PropertyState = {
  request: { place_name: 'London'}
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      console.log(state);
      return state;
  }
};
