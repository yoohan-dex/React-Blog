import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import s from './styles.scss';

class About extends Component {
  render() {
    const content = '# About This Blog\n\nI build this blog to help some people wanted to learn some technelogies about web developing';
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
