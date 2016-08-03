import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import s from './styles.scss';


class Article extends Component {
  render() {
    const { image, content, genre, date, title } = this.props;
    const { router } = this.context;
    const bgStyle = {
      backgroundImage: `url(${image})`,
    };

    return (
      <article className={s.article}>
        <div style={bgStyle} className={s.cardMedia} />
        <div className={s.genre}>
          <a onClick={router.push.bind(null, `/genre/${genre}`)}>{genre}</a><time>{date}</time>
        </div>
        <div className={s.title}><h1>{title}</h1></div>
        <ReactMarkdown
          source={content}
          className={s.markdown}
          containerTagName="section"

        />
      </article>
    );
  }
}

Article.propTypes = {
  image: PropTypes.string,
  content: PropTypes.string,
  genre: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

Article.contextTypes = {
  router: PropTypes.object,
};

export default Article;
