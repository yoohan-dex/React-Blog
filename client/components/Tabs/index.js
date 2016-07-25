import React, { Component, PropTypes } from 'react';
import Tab from '../Tab';
import s from './styles.scss';

class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
      pointer: {},
    };
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.updatePointer = this.updatePointer.bind(this);
    this.listenPointer = this.listenPointer.bind(this);
    this.setPointerState = this.setPointerState.bind(this);
    this.afterAllMounted = this.afterAllMounted.bind(this);
    this.searchActive = this.searchActive.bind(this);
    this.renderNav = this.renderNav.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.listenPointer, false);
    // this.timeoutPointer();
    // setTimeout(this.afterAllMounted, 1000);
    // this.setPointerState(this.props.path.indexOf(location.pathname));
    // this.updatePointer(this.props.path.indexOf(location.pathname));
  }

  // componentWillReceiveProps(nextProps) {
  //   this.updatePointer(this.state.index);
  // }

  componentWillUnmount() {
    this.setState({
      index: -1,
      pointer: {},
    });
  }


  setPointerState(idx) {
    if (idx !== this.state.index) {
      this.setState({
        index: idx,
      }, this.updatePointer(idx));
    }
  }
  afterAllMounted() {
    this.setPointerState(this.props.path
      .map(item => item.path)
      .indexOf(location.pathname));
  }
  listenPointer() {
    return this.updatePointer(this.state.index);
  }

  handleHeaderClick(idx) {
    if (this.props.onChange) this.props.onChange(idx);
  }


  // parseChildren() {
  //   const headers = [];

  //   React.Children.forEach(this.props.children, item => {
  //     headers.push(item);
  //   });
  //   return headers;
  // }

  updatePointer(idx) {
    if (idx < 0) {
      this.setState({
        pointer: {
          top: `${this.refs.navigation.getBoundingClientRect().height}px`,
          left: '1500px',
          width: '0px',
        },
      });
      return;
    }
    const label = this.refs.navigation.children[idx].getBoundingClientRect();
    this.setState({
      pointer: {
        top: `${this.refs.navigation.getBoundingClientRect().height}px`,
        left: `${label.left}px`,
        width: `${label.width}px`,
      },
    });
    // const startPoint = this.refs.tabs.getBoundingClientRect().left;
  }
  searchActive() {
    this.setPointerState(this.props.path.length);
  }//  wait for a real routes for search.

  // renderHeaders(headers) {
  //   return headers.map((item, idx) =>
  //     React.cloneElement(item, {
  //       key: idx,
  //       // active: this.state.index === idx,
  //       active: location.pathname === this.props.path[idx],
  //       onClick: this.handleHeaderClick.bind(this, idx, item),
  //       path: this.props.path[idx],
  //       timeoutPointer: this.timeoutPointer,
  //     })
  //   );
  // }

  renderNav() {
    return this.props.path.map((item, idx) =>
      <Tab
        key={idx}
        active={location.pathname === item.path}
        label={item.label}
        path={item.path}
        updatePointer={this.afterAllMounted}
        onClick={this.handleHeaderClick}
      />

    );
  }

  render() {
    // const headers = this.parseChildren();
    return (
      <header className={s.tabs}>
        <label className={s.logo} onClick={this.context.handleLogo}>{this.props.menu}</label>
        <div className={s.wrapper} ref="tabs">
          <nav className={s.navigation} ref="navigation">
            {this.renderNav()}
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
Tabs.contextTypes = {
  handleLogo: PropTypes.func,
};

export default Tabs;
