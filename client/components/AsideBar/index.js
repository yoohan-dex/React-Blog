import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import s from './styles.scss';

class AsideBar extends Component {
  constructor() {
    super();
    this.state = {
      searchData: undefined,
    };

    this.search = this.search.bind(this);
    this.searchData = this.searchData.bind(this);
    this.closeAndGo = this.closeAndGo.bind(this);
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
      if (window.innerWidth <= 736) {
        this.context.handleLogo();
      }
      const path = `/search/${this.state.searchData}`;
      this.context.router.push(path);
    }
  }//  wait for a real routes for search.
  closeAndGo(url) {
    if (window.innerWidth <= 736) {
      this.context.handleLogo();
    }
    this.context.router.push(url);
  }

  render() {
    const { genres, dateGroup } = this.props;
    const { logoState } = this.context;
    const style = classnames(s.asidebar, {
      [s.open]: logoState,
    });
    const renderGenres = () => {
      const counts = [];
      for (const x in genres) {
        counts.push(
          <dd key={x} onClick={this.closeAndGo.bind(null, `/genre/${x}`)}>
            {`${x} `}
            <span className={s.count}>
              {genres[x]}
            </span>
          </dd>);
      }
      return counts;
    };

    const renderDate = () => {
      const dates = dateGroup.map(x => new Date(x))
      .map(x => x.getMonth())
      .reduce((pre, cur) => (pre[cur]++ || (pre[cur] = 1), pre), {});
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const counts = [];
      for (const x in dates) {
        counts.push(
          <dd key={x} onClick={this.closeAndGo.bind(null, `/date/${x}`)}>
            {`${months[x]} `}
            <span className={s.count}>{dates[x]}</span>
          </dd>
        );
      }
      return counts;
    };
    // const Years = dateGroup.map(x => new Date(x)).map(x => x.getYear()).length;
    return (
      <aside id="asd" className={style}>
        <section>
          <form className={s.search} onSubmit={this.search}>
            <input key={2} type="text" onChange={this.searchData}placeholder="Search" />
            <button >✓</button>
          </form>
        </section>
        <section>
          <dl className={s.type}>
            <dt>TYPE</dt>
            {renderGenres().map(x => x)}
          </dl>
          <dl className={s.type}>
            <dt>TIME</dt>
            {renderDate().map(x => x)}
          </dl>
        </section>
      </aside>
    );
  }
}
            // <dd>2016 <span className={s.count}>{Years}</span></dd>

AsideBar.propTypes = {

};
AsideBar.contextTypes = {
  logoState: PropTypes.bool,
  handleLogo: PropTypes.func,
  router: PropTypes.object,
};

export default AsideBar;
