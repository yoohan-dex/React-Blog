import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import s from './styles.scss';

class Card extends Component {
  constructor() {
    super();
  }
  render() {
    const { image, children } = this.props;
    const bgStyle = {
      backgroundImage: `url(${image})`,
    };
    const strinkStyle = classnames(s.card, {
      [s.cardStrink]: this.context.logoState,
    });

    return (
      <div className={strinkStyle}>
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
  }
}

Card.propTypes = {

};

Card.contextTypes = {
  logoState: PropTypes.bool,
  store: PropTypes.object,
  router: PropTypes.object,
};

export default Card;
