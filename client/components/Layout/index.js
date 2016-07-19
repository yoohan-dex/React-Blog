import React from 'react';
import s from './styles.scss';
const Layout = ({ children }) =>
  <div className={s.layout}>
    {children}

  </div>;



const Panel = ({ children }) =>
  <div className={s.panel}>
    {children}
  </div>;

export {
  Layout,
  Panel,
};
