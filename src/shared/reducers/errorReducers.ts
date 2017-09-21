import {Action, CLEAR_ERROR_MESSAGE, SAVE_ERROR_MESSAGE} from '../actions/sharedActions';

export default (state = '', action: Action) => {
  switch (action.type) {
    case SAVE_ERROR_MESSAGE:
      return action.payload;
    case CLEAR_ERROR_MESSAGE:
      return '';
    default:
      return state;
  }
};
