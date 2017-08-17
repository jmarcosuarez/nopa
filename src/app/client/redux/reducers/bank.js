import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

export default function bank(state = initialState.bank, action) {
  switch (action.type) {
    case types.BANK_SELECT:
      return [
        ...state,
        Object.assign({}, action.bank),
      ];
    case types.STARTED_BUTTON_CLICK:
      return state;
    default:
      return state;
  }
}
