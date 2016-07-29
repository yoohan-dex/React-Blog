import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Panel from '../../components/Panel';
import Article from '../../components/Article';
import articlePageSelector from './selectors';
class ArticlePage extends Component {
  constructor() {
    super();
    this.parseId = this.parseId.bind(this);
  }
  componentDidMount() {

  }
  parseId(articles) {
    const index = articles.findIndex(x => `${x._id}` === this.props.params.id);
    return articles[index];
  }
  parseArticle({ title, created, content, metafield }) {
    const article = {};
    const time = new Date(created);
    article.title = title;
    article.date = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`;
    article.content = content;
    article.genre = metafield.genre.value;
    article.image = metafield.image.url;
    return article;
  }
  render() {
    const { articles } = this.props;
    const renderArticle = ({ title, date, genre, content, image }) =>
      <Article
        title={title}
        date={date}
        genre={genre}
        content={content}
        image={image}
      />;
    return (
      <Panel>
        {renderArticle(this.parseArticle(this.parseId(articles)))}
      </Panel>
    );
  }
}

ArticlePage.propTypes = {

};
const mapStateToProps = articlePageSelector();
export default connect(mapStateToProps)(ArticlePage);
