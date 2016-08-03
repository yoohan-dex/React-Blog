import React, { PropTypes } from 'react';
import s from './styles.scss';
const Panel = ({ children }) =>
  <main className={s.panel}>
    {children}
  </main>;


Panel.propTypes = {
  children: PropTypes.node,
};

export default Panel;
