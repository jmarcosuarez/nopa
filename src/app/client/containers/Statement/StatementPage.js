import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import * as actions from '../../redux/actions';
import * as transactionsSelectors from '../../redux/reducers/bank';

import styles from './Statement.css';
import { Layout, Button, AccDetails, ListView, ListRow } from '../../components';

class StatementPage extends Component {
  componentDidMount() {
    // this will be here only for testing purposes
    this.props.onFetchTransactions();
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

          <AccDetails />

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
  onFetchTransactions: PropTypes.func.isRequired,
  transactionsById: PropTypes.array,
  transactionsIdArray: PropTypes.array,
};

StatementPage.defaultProps = {
  transactionsById: [],
  transactionsIdArray: [],
};

function mapStateToProps(state) {
  const [transactionsById, transactionsIdArray] = transactionsSelectors.getTransactions(state);
  return {
    transactionsById,
    transactionsIdArray,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchTransactions: bindActionCreators(actions.fetchTransactions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StatementPage);
