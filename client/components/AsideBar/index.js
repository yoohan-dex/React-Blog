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
      this.context.handleLogo();
      const path = `/search/${this.state.searchData}`;
      this.context.router.push(path);
    }
  }//  wait for a real routes for search.
  render() {
    const { logoState } = this.context;
    const style = classnames(s.asidebar, {
      [s.open]: logoState,
    });

    const renderGenres = (genres, counts) =>
      <dd>{genres} <span className={s.count}>{counts}</span></dd>;
    const genres = this.props.genres.map(renderGenres);
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
            {genres}
          </dl>
          <dl className={s.type}>
            <dt>TIME</dt>
            <dd>2016 <span className={s.count}>2</span></dd>
            <dd>JAN <span className={s.count}>2</span></dd>
          </dl>
        </section>
      </aside>
    );
  }
}

AsideBar.propTypes = {

};
AsideBar.contextTypes = {
  logoState: PropTypes.bool,
  handleLogo: PropTypes.func,
  router: PropTypes.object,

};

export default AsideBar;
