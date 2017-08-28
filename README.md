# minimal-react-boilerplate
Minimal react boilerplate - babel/webpack2
## Installation
Execute `npm install` to install dependencies
## Usage
Execute `npm run dev` to run the development server on **http://localhost:8080
or
Execute `npm run prod` to run the production server. To test it works see on **http://localhost:4000

## About
As  part of Zopa's technical test I have been asked to finish implementing a test project they have send me. The project describes the process of connecting a bank account from several major banks and to their Zopa Account. 3 screens out of the required 4 are already built. The code isn't perfect and there is key functionality that is missing, like bank selection and form validation. Additionally the unit tests are broken. 
## What's done
1. CSS Approach 
I have changed boilerplate to add __post-css__ and __css-modules__. Also, added __redux-devtools__ to be able to work with redux data in a development setting. See wiki pages [CSS-Methodology](https://github.com/jmarcosuarez/nopa/wiki/CSS-Methodology)

Unfortunately I haven't as of now finish implementing CSS throughout the app. But the environment is finish and is quite maintainable in the long run. Whenever possible and where I have written any CSS I have meant to write cleaner modern syntax and while talking about layout I always use the Flexbox layout model.
2. Implement a bank selection that persists the login screen
Bank selection is done by saving the the user selected bank to the redux store. We are using the ChooseBankPage container that maps through an inline bankList array calling BankListItem component to render.  BankListItem resides on the components folder and it just renders the bank images as buttons and each with an onClick handler triggering the action to save the bank name to the redux store. Special carefulness have been made into no binding but instead using arrow functions when declaring handlers within react classes as this. See [BankListItem](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/components/BankListItem/BankListItem.js) while the ChooseBankPage container is [here.](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/containers/ChooseBank/ChooseBankPage.js)

3. Implement sensible form validation
I have implemented a HOC that wraps the form component and that deals with form state and actions present in the form. Additionally I have detached actual validations from the form state so they user only needs to define the validation rules and pass them to the validations HOC as a config object. So these are not hard-coded into the HOC. See more on the wiki pages [Form-Validation](https://github.com/jmarcosuarez/nopa/wiki/Form-Validation)

The container component is LoginPage.js and the HOC is called Relalidation.js, both are found [here](https://github.com/jmarcosuarez/nopa/tree/master/src/app/client/containers/Login)
The login form sits on a components folder [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/components/LoginForm/LoginForm.js)

4. Build the transactions screen using the api end-point _localhost:3000/api/transactions_
First, a server have been implemented to serve json from the data folder, enabling CORS to enable calls to http://localhost. I this sense I use the concurrently library to run both the development server and the API at the same time, with just one script. See scripts on the package.json file [here](https://github.com/jmarcosuarez/nopa/blob/master/package.json)
The dev API server [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/server/api.js)

Then, creating the views is just a mater of rendering the actual components defined on the components/statements folder. In more detail, the statementPage container renders AccDetails and ListView components, also declares and passes down to ListView the renderRow markup. Detaching the renderRow from the ListView permits us to reuse the ListView in any other part of the app. From there on, ListView maps through the passed props (renderRow) which calls and pains a row for each iterate of the map function. 
StatementPage [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/containers/Statement/StatementPage.js)
ListView and ListRow are [here](https://github.com/jmarcosuarez/nopa/tree/master/src/app/client/components/Statement)

Another thing is that I am using selectors for the first time in this app to prepare and digest data before passing it to the rendering component. See getTransactions selector in the reducers/bank reducer file. What the getTransactions selector does is prepare and return an array of transactions by id and the actual collection of transactions. Later on, the ListView component will iterate through the array of ids, taking from the collection the current transaction and rendering the row with the data.
Selectors in the reducers/bank [here](https://github.com/jmarcosuarez/nopa/blob/master/src/app/client/redux/reducers/bank.js)

5. Fix and expand the unit tests 
I am testing presentational components by creating snapshops. Also, testing event handlers and state where appropriate. On unit tests, there are behavioral tests for actions and reducers. See wiki pages [Tests](ttps://github.com/jmarcosuarez/nopa/wiki/Tests)

6. Login and authentication
I have used a HOC component that wraps the private routes and confirms the loggedIn state of user.
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
