/* eslint-disable  arrow-body-style */
/* eslint-env jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionTypes from '../actionTypes';
import { fetchTransactions, setTransactions } from '../bank';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/*  helper method to mock the fetch response  */
const mockResponse = (status, statusText, response) => {
  return new global.window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json',
    },
  });
};

describe('BankActions', () => {
  it('calls success action if the fetch response was successful', () => {
    // Initialize mockstore with empty state
    const initialState = {};
    const store = mockStore(initialState);
    global.window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, `{transactions:[{ "id": 1 }] }`)));

    return store.dispatch(fetchTransactions())
      .then(() => {
        const expectedActions = store.getActions();
        expect(expectedActions.length).toBe(1);
        // expect(expectedActions).toEqual({ type: actionTypes.FETCH_TRANSACTIONS, transactions });
      });
  });
});
