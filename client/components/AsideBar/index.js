import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import s from './styles.scss';

class AsideBar extends Component {
  render() {
    const { logoState } = this.context;
    const style = classnames(s.asidebar, {
      [s.open]: logoState,
    });
    return (
      <aside id="asd" className={style}>
        <section>
          <dl className={s.type}>
            <dt>TYPE</dt>
            <dd>JavaScript</dd>
          </dl>
          <dl className={s.type}>
            <dt>TIME</dt>
            <dd>2016</dd>
            <dd>07/28</dd>
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
};

export default AsideBar;
