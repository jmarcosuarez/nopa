# nopa
### React/Redux/Thunk - babel/webpack2

This project describes the process of connecting a bank account to your own Account. So when you log in you are taken to the choose a bank account, then as one bank is chosen you are asked to finish adding login data to complete login in. As the form is send you area taking to a list displaying your own bank data from your bank and through this app.

## Installation
Execute `npm install` to install dependencies
## Usage
Execute `npm run dev` to run the development server on _localhost:8080_

or

Execute `npm run prod` to run the production server. For testing use _localhost:4000_

## What's done
1. __CSS Approach:__ I have changed boilerplate to add __post-css__ and __css-modules__. Also, added __redux-devtools__ to be able to work with redux data in a development setting. See wiki pages [CSS-Methodology](https://github.com/jmarcosuarez/nopa/wiki/CSS-Methodology)

2. __Implement a bank selection that persists the login screen:__ Bank selection is done by saving the user selected bank to the redux store. To paint the buttons: We map through an inline array calling a BankListItem component to render on each iterate, passing th eprops necesary for each button. BankListItem resides on the components folder and it just renders the bank images as buttons. Each button will have an onClick handler triggering the action to save the bank name to the redux store when triggered. Special carefulness have been made into no binding but instead using arrow functions when declaring handlers within react classes. See [BankListItem](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/components/BankListItem/BankListItem.js) while the ChooseBankPage container is [here.](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/containers/ChooseBank/ChooseBankPage.js)

3. __Implement sensible form validation:__ I have implemented a HOC that wraps the form component and that deals with form state and actions present in the form. Additionally I have detached actual validations from the form state so the user only needs to define the validation rules and pass them onto the validation's HOC as a config object. So these are not hard-coded into the HOC. See more on the wiki pages [Form-Validation](https://github.com/jmarcosuarez/nopa/wiki/Form-Validation)

The container component is _LoginPage.js_ and the HOC is called _Revalidation.js_, both are found [here](https://github.com/jmarcosuarez/nopa/tree/master/src/app/client/containers/Login) and the login form is [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/components/LoginForm/LoginForm.js).

4. __Build the transactions screen using the api end-point__ _localhost:3000/api/transactions_: First, a server have been implemented to serve json from the data folder, enabling CORS to handle calls to _localhost_. I this sense I use the _concurrently_ library to run both the development server and the API at the same time, with just one script. See scripts on the _package.json_ file [here](https://github.com/jmarcosuarez/nopa/blob/master/package.json) and the _dev API server_ [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/server/api.js)

Then, creating the views is just a mater of rendering the actual components defined on the components/statements folder. In more detail, the _statementPage_ container renders _AccDetails_ and _ListView_ components, also declares and passes down to _ListView_ the _renderRow_ markup. Detaching the _renderRow_ from the _ListView_ permits us to reuse the ListView in any other part of the app. From there on, _ListView_ maps through the passed props (renderRow) which calls and pains a row for each iterate of the map function. 

See _StatementPage_ [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/containers/Statement/StatementPage.js)
_ListView and ListRow_ are [here](https://github.com/jmarcosuarez/nopa/tree/master/src/app/client/components/Statement)

Another thing is that I am using selectors for the first time in this app to prepare and digest data before passing it to the rendering component. See _getTransactions_ selector in the reducers/bank reducer file. What the _getTransactions_ selector does is prepare and return an array of transactions by id and the actual collection of transactions. Later on, the _ListView_ component will iterate through the array of ids, taking from the collection the current transaction and rendering the row with the data.
Selectors in the reducers/bank code is [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/redux/reducers/bank.js)

5. __Fix and expand the unit tests:__ I am testing presentational components by creating snapshops. Also, testing event handlers and state where appropriate. On unit tests, there are behavioral tests for actions and reducers. See wiki pages [Tests](ttps://github.com/jmarcosuarez/nopa/wiki/Tests) for more on this.

6. __Login and authentication:__ I have used a HOC component that wraps the private routes and confirms the _loggedIn_ state of user.
See wiki pages [Login-and-Authentication](https://github.com/jmarcosuarez/nopa/wiki/Login-and-Authentication)

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## History
TODO: Write history
## Credits
TODO: Write credits
## License
TODO: Write license
