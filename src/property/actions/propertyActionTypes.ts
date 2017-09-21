export type Action = {
  type: string,
  payload?: object
}

export const SEARCH = 'SEARCH';
export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';
export const SELECT_PROPERTY = 'SELECT_PROPERTY';
