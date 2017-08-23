/* eslint-disable no-undef */
import bankReducer from '../bank';
import * as actionTypes from '../../actions/actionTypes';

const state = {};
const choosenBank = "HSBC";
const transactions = {
  0: { id: 1, dateStr: "Now", beneficary: "PAYPAL ZARA", value: "- £35.98" },
  1: { id: 2, dateStr: "Now", beneficary: "HOUSE OF FRASER", value: "- £35.98" },
};
const bank = {
  choosenBank: "HSBC",
};

describe('REDUCER -> BankReducer', () => {
  it('reducer for BANK_SELECT', () => {
    const newState = bankReducer(state, 
      { type: actionTypes.BANK_SELECT, choosenBank });
    expect(newState).toEqual(bank);
  });
  it('reducer for FETCH_TRANSACTIONS', () => {
    const newState = bankReducer(state, 
      { type: actionTypes.FETCH_TRANSACTIONS, transactions });
    expect(newState).toEqual(transactions);
  });
});
