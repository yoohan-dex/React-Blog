import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import s from './styles.scss';

class About extends Component {
  render() {
    const { content } = this.props;
    return (
      <article className={s.article}>
        <ReactMarkdown
          source={content}
          className={s.markdown}
          containerTagName="section"

        />
      </article>
    );
  }
}

export default About;
