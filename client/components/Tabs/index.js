import React, { Component, PropTypes } from 'react';
import s from './styles.scss';

class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      pointer: {},
    };
    this.renderHeaders = this.renderHeaders.bind(this);
    this.parseChildren = this.parseChildren.bind(this);
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.updatePointer = this.updatePointer.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.listenPointer(), false);
    window.addEventListener('pagehide', this.listenPointer(), false);
    this.listenPointer()();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.updatePointer(this.state.index);
  // }

  componentWillUnmount() {
    this.updatePointer(this.state.index);
  }
  listenPointer() {
    return this.updatePointer.bind(null, this.props.path.indexOf(location.pathname));
  }
  handleHeaderClick(idx) {
    this.setState({
      index: idx,
    }, this.updatePointer(idx));

    if (this.props.onChange) this.props.onChange(idx);
  }


  parseChildren() {
    const headers = [];

    React.Children.forEach(this.props.children, item => {
      headers.push(item);
    });
    return headers;
  }

  updatePointer(idx) {
    // const startPoint = this.refs.tabs.getBoundingClientRect().left;
    const label = this.refs.navigation.children[idx].getBoundingClientRect();
    this.setState({
      pointer: {
        top: `${this.refs.navigation.getBoundingClientRect().height}px`,
        left: `${label.left}px`,
        width: `${label.width}px`,
      },
    });
  }

  renderHeaders(headers) {
    return headers.map((item, idx) =>
      React.cloneElement(item, {
        key: idx,
        // active: this.state.index === idx,
        active: location.pathname === this.props.path[idx],
        onClick: this.handleHeaderClick.bind(this, idx, item),
        path: this.props.path[idx],
      })
    );
  }

  render() {
    const headers = this.parseChildren();
    return (
      <header className={s.tabs}>
        <label className={s.logo} onClick={this.props.logoOnClick}>AooReN</label>
        <div className={s.wrapper} ref="tabs">
          <nav className={s.navigation} ref="navigation">
            {this.renderHeaders(headers)}
          </nav>
          <span className={s.pointer} style={this.state.pointer} />
        </div>
      </header>
    );
  }
}
Tabs.propTypes = {
  children: PropTypes.node,
  path: PropTypes.array,
  onChange: PropTypes.func,
};


export default Tabs;
