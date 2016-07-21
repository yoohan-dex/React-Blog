import React, { Component, PropTypes } from 'react';
import s from './styles.scss';
class Panel extends Component {
  render() {
    return (
      <main className={s.panel}>
        {this.props.children}
      </main>
    );
  }
}

Panel.propTypes = {

};

export default Panel;
