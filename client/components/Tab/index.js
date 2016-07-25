import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import s from './styles.scss';

class Tab extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.setTimetoUpdate = this.setTimetoUpdate.bind(this);
  }
  componentDidMount() {
    // this.props.updatePointer(this.props.paths.indexOf(this.props.path));
    this.setTimetoUpdate();
  }

  componentDidUpdate(prevProps) {
    this.props.updatePointer();
  }
  
  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  setTimetoUpdate() {
    return setTimeout(this.props.updatePointer, 2000);
  }
  

  render() {
    const { active, updatePointer } = this.props;
    const style = classnames(s.label, {
      [s.active]: active,
    });
    return (

            
          <Link className={style} to={this.props.path} onClick={this.handleClick}>{this.props.label}</Link>

    );
  }
}

Tab.propTypes = {
  activeClassName: PropTypes.string,
  label: PropTypes.any.isRequired,
  active: PropTypes.bool,
  onActive: PropTypes.func,
  onClick: PropTypes.func,
  afterAllMounted: PropTypes.func,
};

Tab.defaultProps = {
  active: false,
};
export default Tab;
