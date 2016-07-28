import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import s from './styles.scss';

class Card extends Component {

  componentWillUnmount() {
    console.log('yed');
  }
  render() {
    const { image, title, brief, date, genre, id, main } = this.props;
    const bgStyle = {
      backgroundImage: `url(${image})`,
    };
    const style = classnames(s.card, {
      [s.cardStrink]: this.context.logoState && window.innerWidth > 736,
      [s.cardMain]: main,
    });

    return (
      <div className={style}>
        <Link to={`/article/${id}`} className={s.link}>
          <div style={bgStyle} className={s.cardMedia} />
          <article className={s.article}>
            <h1>{title}</h1>
            <small><time>{date}</time><span>{genre}</span></small>
          </article>
        </Link>
      </div>

    );
  }
}
            // <div className={s.content}></div>
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  brief: PropTypes.string,
  date: PropTypes.string,
  genre: PropTypes.string,
  id: PropTypes.string,
};

Card.contextTypes = {
  logoState: PropTypes.bool,
  store: PropTypes.object,
  router: PropTypes.object,
};

export default Card;
