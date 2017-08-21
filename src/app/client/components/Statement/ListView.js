import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map, nth } from 'ramda';
import styles from './Styles.css';

export default class ListView extends Component {
  // constructor(props) {
  //   super(props);
  // }
  renderRowThroughProps(rowId) {
    // console.log("rowid:", rowId);
    // console.log('this.props.rowsById:', this.props.rowsById);
    // console.log('picking:', nth(rowId, this.props.rowsById));
    if (typeof this.props.renderRow === 'function') {
      return this.props.renderRow(rowId, nth(rowId, this.props.rowsById));
    }
    return true;
  }
  renderRowById = rowId =>
    <li key={rowId}>
      {this.renderRowThroughProps(rowId)}
    </li>;

  render() {
    return (
      <ul>
        {map(this.renderRowById, this.props.rowsIdArray)}
      </ul>
    );
  }
}

ListView.propTypes = {
  // onFetchTransactions: PropTypes.func.isRequired,
  rowsIdArray: PropTypes.array.isRequired,
  rowsById: PropTypes.array.isRequired,
  renderRow: PropTypes.func.isRequired,
};

ListView.defaultProps = {
  // transactionsById: [],
  // transactionsIdArray: [],
};