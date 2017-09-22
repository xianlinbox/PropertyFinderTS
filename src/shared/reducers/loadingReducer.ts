import {
  Action,
  START_LAODING,
  END_LOADING
} from '../actions/sharedActions';

export default (state = false, action: Action) => {
  switch (action.type) {
    case START_LAODING:
      return true;
    case END_LOADING:
      return false;
    default:
      return state;
  }
};
