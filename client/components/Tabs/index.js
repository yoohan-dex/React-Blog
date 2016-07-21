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
    this.listenPointer = this.listenPointer.bind(this);
    this.setPointerState = this.setPointerState.bind(this);
    this.afterAllMounted = this.afterAllMounted.bind(this);
    this.searchActive = this.searchActive.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.listenPointer, false);
    setTimeout(this.afterAllMounted, 500);
    // this.setPointerState(this.props.path.indexOf(location.pathname));
    // this.updatePointer(this.props.path.indexOf(location.pathname));
  }

  // componentWillReceiveProps(nextProps) {
  //   this.updatePointer(this.state.index);
  // }

  // componentWillUnmount() {
  //   this.updatePointer(this.state.index);
  // }
  

  setPointerState(idx) {
    this.setState({
      index: idx,
    }, this.updatePointer(idx));
  }
  afterAllMounted() {
    return this.setPointerState(this.props.path.indexOf(location.pathname));
  }
  listenPointer() {
    return this.updatePointer(this.state.index);
  }

  handleHeaderClick(idx) {
    this.setPointerState(idx);

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
  searchActive() {
    this.setPointerState(2);
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
            <input key={2} type="text" placeholder="Search" />
            <button onClick={this.searchActive}>✓</button>
            
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
