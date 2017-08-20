import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { prop } from 'ramda';
import * as actions from '../../redux/actions';
import * as transactionsSelectors from '../../redux/reducers/bank';

import styles from './Statement.css';
import { Layout, Button, AccDetails, ListView, ListRow } from '../../components';

class StatementPage extends Component {
  componentDidMount() {
    // this will be here only for testing purposes
    this.props.onLogInUser({
      surname: 'Denis', 
      sortCode: '23-43-54',
      accountNumber: '09434534343434',
      passCode: '0943',
      memorableWord: 'Qwteyruy',
      choosenBank: 'Natwest',
    });
  }
  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderRow(transactionId, transaction) {
    return (
      <ListRow
        rowId={transactionId}
        // onClick={this.onRowClick}
      >
        <h3>{transaction.beneficary}</h3>
        <p>{transaction.value}</p>
      </ListRow>
    );
  }

  render() {
    if (!this.props.transactionsById) return this.renderLoading();
    return (
      <Layout title="Statements Page!">
        <div className={styles.main}>
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you&#39;d<br />
              like to your Nopa account and get updates on your balance instantly. Plus it&#39;s free.</p>   

          <AccDetails
            account={prop('accountNumber', this.props.user)}
            surname={prop('surname', this.props.user)}
            choosenBank={prop('choosenBank', this.props.user)} />

          <ListView
            rowsIdArray={this.props.transactionsIdArray}
            rowsById={this.props.transactionsById}
            renderRow={this.renderRow} />

          <div className={styles.button}>
            <Button>Show More</Button>
          </div>

        </div>
      </Layout>
    );
  }
} 

StatementPage.propTypes = {
  // onFetchTransactions: PropTypes.func.isRequired,
  onLogInUser: PropTypes.func.isRequired,
  transactionsById: PropTypes.array,
  transactionsIdArray: PropTypes.array,
  user: PropTypes.object,
};

StatementPage.defaultProps = {
  transactionsById: [],
  transactionsIdArray: [],
  user: {},
};

function mapStateToProps(state) {
  const [transactionsById, transactionsIdArray] = transactionsSelectors.getTransactions(state);
  const { user } = state;
  return {
    transactionsById,
    transactionsIdArray,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchTransactions: bindActionCreators(actions.fetchTransactions, dispatch),
    onLogInUser: bindActionCreators(actions.logInUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementPage);
