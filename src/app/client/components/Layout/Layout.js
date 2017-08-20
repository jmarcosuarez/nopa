/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Partners } from '../';
import styles from './Layout.css';

class Layout extends Component {

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <section>
        <Header />
        <div className={styles.layout}>
          {this.props.children}
        </div>
        <Partners />
        <Footer />
      </section>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: "",
};

export default Layout;
