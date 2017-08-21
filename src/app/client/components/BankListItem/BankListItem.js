import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BankListItem.css';

class BankListItem extends Component {
  selectingBank = () => this.props.onSelectBank(this.props.alt);
  render() {
    return (
      <button className={styles.bankListItem} key={this.props.alt} onClick={this.selectingBank}>
        <img alt={this.props.alt} src={this.props.src} />
      </button>
    );
  }
}

BankListItem.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  onSelectBank: PropTypes.func.isRequired,
};

export default BankListItem;
