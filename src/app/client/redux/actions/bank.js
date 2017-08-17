import * as actionTypes from '../actions/actionTypes';

/**
  * When user click the get Stated button on main container.
    1. If user is loggedIn and has already got a bank selected -> change btn lettering "Go to list" 
       and take him to list page.
    2. If user is not loggedIn and doesn't have a bank selected -> take him to bank selection page
    3. If user is not loggedIn and has a bank selected -> take him to form page instead
    then
  */
export function getStartedButtonClick(loggedInStatus) {
  console.log('getStartedButtonClick action called');
  // return {
  //   type: actionTypes.STARTED_BUTTON_CLICK,
  //   loggedInStatus,
  // };
}
