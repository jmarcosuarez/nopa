import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actions/actionTypes';

/**
  * When user click the get Stated button on main container.
    1. If user is loggedIn and has already got a bank selected -> change btn lettering "Go to list" 
       and take him to list page.
    2. If user is not loggedIn and doesn't have a bank selected -> take him to bank selection page
    3. If user is not loggedIn and has a bank selected -> take him to form page instead
    then
  */
export function setChoosenBank(choosenBank) {
  return {
    type: actionTypes.BANK_SELECT,
    choosenBank,
  };
}
export function setTransactions(transactions) {
  return {
    type: actionTypes.FETCH_TRANSACTIONS,
    transactions,
  };
}
/**
 * Called synchronously from user action file
 * While redirecting to '/statement', fetch transactions to populate the list that contains!
 */
export function fetchTransactions() {
  return (dispatch) => {
    fetch(`http://localhost:3001/api`)
      .then(response => response.json())
      .then((transactions) => {
        dispatch(setTransactions(transactions));
      });
  };
}
