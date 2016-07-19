import React, { Component, PropTypes } from 'react';
import s from './styles.scss';

class AsideBar extends Component {
  render() {
    return (
      <aside id="asd" className={s.asidebar}>
        <ul>
          <li>
            <label>yoohoo!!!!!!</label>
          </li>
          <li>
            <label>yoohoo!!!!!!</label>
          </li>
          <li>
            <label>yoohoo!!!!!!</label>
          </li>
          <li>
            <label>yoohoo!!!!!!</label>
          </li>
        </ul>
      </aside>
    );
  }
}

AsideBar.propTypes = {

};

export default AsideBar;
