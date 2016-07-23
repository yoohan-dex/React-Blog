import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import s from './styles.scss';


class Article extends Component {
  render() {
    const { image, children, input } = this.props;
    const bgStyle = {
      backgroundImage: `url(${image})`,
    };
    
    return (
      <article className={s.article}>
        <div style={bgStyle} className={s.cardMedia}>

        </div>
        <ReactMarkdown
          source={input}
          className={s.markdown}
          containerTagName="section"

        />
      </article>
    );
  }
}

Article.propTypes = {

};

export default Article;
