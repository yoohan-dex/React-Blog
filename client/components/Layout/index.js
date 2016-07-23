import React, { Component, PropTypes } from 'react';

import s from './styles.scss';


class Layout extends Component {
  constructor() {
    super();
    this.state = {
      logoState: false,
    };
    this.handleLogo = this.handleLogo.bind(this);
  }
  getChildContext() {
    return {
      logoState: this.state.logoState,
      handleLogo: this.handleLogo,
    };
  }
  handleLogo() {
    this.setState({
      logoState: !this.state.logoState,
    });
  }
  render() {
    return (
      <div className={s.layout}>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {

};
Layout.childContextTypes = {
  logoState: PropTypes.bool,
  handleLogo: PropTypes.func,
};

export default Layout;
