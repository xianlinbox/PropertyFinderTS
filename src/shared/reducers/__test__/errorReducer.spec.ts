import errorReducer from '../errorReducer'
import {SAVE_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE} from '../../actions/sharedActions';

describe('errorReducer', () => {
  it('ignore unrecognised action', () => {
    expect(errorReducer('', {type: 'not exist'})).toBe('')
  });

  it('update state with action payload', () => {
    expect(errorReducer('', {type: SAVE_ERROR_MESSAGE, payload: 'error'})).toBe('error')
  });

  it('clear state when reduce clear error message action', () => {
    expect(errorReducer('wrong session', {type: CLEAR_ERROR_MESSAGE})).toBe('')
  })
});