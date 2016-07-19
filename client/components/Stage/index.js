import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import s from './styles.scss';

class Stage extends Component {
  constructor() {
    super();
  }


  render() {
    const { logoState } = this.props;
    const style = classnames(s.stage, {
      [s.open]: logoState,
    });
    // const gaussStyle = classnames(s.gauss, {
    //   [s.filter]: logoState,
    // });
    return (
      <div className={style}>
        {this.props.children}
      </div>
    );
  }
}

Stage.propTypes = {

};

export default Stage;
