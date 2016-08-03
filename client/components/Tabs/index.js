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
    this.renderNav = this.renderNav.bind(this);
    this.searchData = this.searchData.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.listenPointer, false);
  }

  componentWillUnmount() {
    this.setState({
      index: -1,
      pointer: {},
      searchData: undefined,
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
    if (location.pathname.match(/search/)) {
      this.setPointerState(this.props.path.length);
      return;
    }
    this.setPointerState(this.props.path
      .map(item => item.path)
      .indexOf(location.pathname));
  }
  listenPointer() {
    return this.updatePointer(this.state.index);
  }

  handleHeaderClick(idx) {
    if (this.props.onChange) this.props.onChange(idx);
    if (window.innerWidth <= 736 && this.context.logoState) {
      this.context.handleLogo();
    }
  }

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
  }
  searchData(e) {
    const data = e.target.value;
    this.setState({
      searchData: data,
    });
  }
  search(e) {
    e.preventDefault();
    if (this.state.searchData !== undefined && this.state.searchData !== '') {
      const path = `/search/${this.state.searchData}`;
      this.context.router.push(path);
    }
  }

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
            <form onSubmit={this.search}>
              <input key={this.props.path.length} onChange={this.searchData} type="text" placeholder="Search" />
              <button onClick={this.search}>✓</button>
            </form>
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
  menu: PropTypes.string,
};
Tabs.contextTypes = {
  logoState: PropTypes.bool,
  handleLogo: PropTypes.func,
  router: PropTypes.object,
};

export default Tabs;
