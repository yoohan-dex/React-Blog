import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';
import s from './styles.scss';


class Article extends Component {
  render() {
    const { image, children } = this.props;
    const bgStyle = {
      backgroundImage: `url(${image})`,
    };
    const input = '# This is a header\n\nAnd this is a paragraph\n\n--------------- \n\n```js\n\nvar a= 0;\nfunction p(){ sdjife };\n\n```\n\n<blockquote>\nThis blockquote will change based on the HTML settings above.\n</blockquote>\n\nthis is the test text to view the lineheight and font if is beautiful right?but I seem it is great enough!!!!yes I like it !!';
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
