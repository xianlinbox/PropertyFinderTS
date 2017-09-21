import {UPDATE_SEARCH_STRING} from './propertyActionTypes'
import {createAction} from 'redux-actions';

export const updateSearchString = createAction(UPDATE_SEARCH_STRING);

export const search = (request) => {
  return dispatch => {
    dispatch(updateSearchString(request))
  }
};