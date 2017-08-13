/* eslint-disable no-undef */
import React, { PropTypes, Component } from 'react';
import { Header, Footer, Partners } from '../';

class Layout extends Component {

  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <section>
        <Header />
        <div className="layout">
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
  title: PropTypes.string.isRequired,
};

export default Layout;
