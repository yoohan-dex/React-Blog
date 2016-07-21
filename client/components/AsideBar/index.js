import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import s from './styles.scss';

class AsideBar extends Component {
  render() {
    const { logoState } = this.props;
    const style = classnames(s.asidebar, {
      [s.open]: logoState,
    });
    return (
      <aside id="asd" className={style}>
        <section>
          <ul>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
            <li>hooo</li>
            <li>yes</li>
            <li>iam</li>
            <li>yougo</li>
          </ul>
        </section>
      </aside>
    );
  }
}

AsideBar.propTypes = {

};

export default AsideBar;
