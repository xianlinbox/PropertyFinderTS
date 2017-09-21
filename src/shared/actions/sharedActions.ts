export type Action = {
  type: string,
  payload?: object
}

export const START_LAODING = 'START_LAODING';
export const END_LOADING = 'END_LAODING';
export const SAVE_ERROR_MESSAGE = 'SAVE_ERROR_MESSAGE';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

