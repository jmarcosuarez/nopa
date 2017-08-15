import React from 'react';
import Button from '../Button/Button';
import * as Paths from '../../constants/paths';
import styles from './Header.css';

const Header = props => (
  <div className={styles.header}>
    <div className={styles.logo} />
    <div className={styles.signin}>
      <Button to={Paths.LOGIN_BANK}>Log In</Button>
    </div>
  </div>
  );

export default Header;
