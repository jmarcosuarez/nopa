/* eslint-disable no-undef */
import * as actions from '../../actions';
import * as actionTypes from '../../actions/actionTypes';

const choosenBank = 
  {
    choosenBank: "HSBC",
  };
const transactions = {
  0: { id: 1, dateStr: "Now", beneficary: "PAYPAL ZARA", value: "- £35.98" },
  1: { id: 2, dateStr: "Now", beneficary: "HOUSE OF FRASER", value: "- £35.98" },
};

describe('BankActions', () => {
  it('should create the action to choose a bank', () => {
    const choose = actions.setChoosenBank(choosenBank);
    const expectedAction = {
      choosenBank,
      type: actionTypes.BANK_SELECT,
    };
    expect(choose).toEqual(expectedAction);
  });
  it('should create the action to save a bank', () => {
    const save = actions.setTransactions(transactions);
    const expectedAction = {
      transactions,
      type: actionTypes.FETCH_TRANSACTIONS,
    };
    expect(save).toEqual(expectedAction);
  });
});
