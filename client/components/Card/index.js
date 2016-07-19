import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import s from './styles.scss';

const Card = ({ image, children }) => {
  const bgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    
      <div className={s.card}>
      <Link to="/content">
        <div style={bgStyle} className={s.cardMedia}>
          <div className={s.content}></div>
          {children}
        </div>
        <article className={s.article}>
          <h1>It's Time To Improve Your Design Skills</h1>
          <p>What do you think about it ? by the way I need some job , to save my life , all of time I spent to improve my develop skills but have no money? why?</p>
          <small>sdfsdf</small>
        </article>
         </Link>
      </div>
   
  );
};

Card.propTypes = {

};

export default Card;
