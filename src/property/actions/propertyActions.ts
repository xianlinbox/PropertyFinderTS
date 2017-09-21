import {createAction} from 'redux-actions';

export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const updateSearchString = createAction(UPDATE_SEARCH_STRING);

export const search = (request) => {
  return dispatch => {
    dispatch(updateSearchString(request))
  }
};