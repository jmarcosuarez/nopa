/* eslint-disable react/prefer-stateless-function */
import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container">
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
