import React, {PropTypes} from 'react';
import s from './styles.scss';


const Nav = props => {
  return (
    <header className={s.nav}>
      {props.children}
    </header>
  );
};

Nav.propTypes = {
  
};

export default Nav;
