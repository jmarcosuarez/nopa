import * as types from '../actions/actionTypes';
import initialState from './initialState.js';

function setTransactions(state, action) {
  const { transactions } = action;
  return { ...state, ...transactions };
}

export default function bank(state = initialState.bank, action) {
  switch (action.type) {
    case types.BANK_SELECT:
      return state;
    case types.STARTED_BUTTON_CLICK:
      return state;
    case types.FETCH_TRANSACTIONS:
      return setTransactions(state, action);
    default:
      return state;
  }
}
