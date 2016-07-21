import React from 'react';
import s from './styles.scss';
const Layout = ({ children }) =>
  <div className={s.layout}>
    {children}
  </div>;
export default Layout;
