/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';
import styles from '../components/Layout/Layout.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

App.contextTypes = {
  router: React.PropTypes.object,
};

export default App;
