import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.css';

const ListRow = props =>
  <div className={styles.listRow}>
    {props.children}
  </div>;


ListRow.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ListRow;
