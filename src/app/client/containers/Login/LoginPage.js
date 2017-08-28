import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, curry, pick, prop } from 'ramda';
import { validate } from 'spected';
import { Layout, LoginForm } from '../../components';
import revalidation from './Revalidation';
import styles from './Login.css';

const isNotEmpty = a => a.trim().length > 0;
const hasCapitalLetter = a => /[A-Z]/.test(a);
const isGreaterThan = curry((len, a) => (a > len));
const isLengthGreaterThan = len => compose(isGreaterThan(len), prop('length'));

const basicValidationRules = {
  surname: [
    [isNotEmpty, 'Surname should not be empty.'],
  ],
  memorableWord: [
    [isLengthGreaterThan(7), 'Minimum MemorableWord length of 8 is required.'],
    [hasCapitalLetter, 'MemorableWord should contain at least one uppercase letter.'],
  ],
};

const validateFn = validate(() => [], a => a);
const SimpleForm = revalidation(
  {
    validate: {
      all: data => 
        validateFn(basicValidationRules, data),
      input: (name, value) => 
        validateFn(pick([name], basicValidationRules), { [name]: value }),
    },
  },
)(LoginForm);

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        surname: '', 
        sortCode: '23-43-54',
        accountNumber: '09434534343434',
        passCode: '0943',
        memorableWord: '',
      } };
  }

  render() {
    return (
      <Layout>
        <div className={styles.main}>
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you&#39;d<br />
              like to your Nopa account and get updates on your balance instantly. Plus it&#39;s free.</p>   
          <SimpleForm
            values={this.state.form}
            submitCb={this.props.onLogInUser}
          /> 
        </div>
      </Layout>
    );
  }
}

LoginPage.propTypes = {
  onLogInUser: PropTypes.func,
};

LoginPage.defaultProps = {
  onLogInUser: () => {},
};