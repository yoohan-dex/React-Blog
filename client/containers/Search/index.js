import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Panel from '../../components/Panel';
import searchSelector from '../Main/selectors';

class Search extends Component {
  parseArticles({ title, created, _id, metafield }) {
    const card = {};
    const time = new Date(created);
    card.title = title;
    card.id = _id;
    card.date = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`;
    card.brief = metafield.brief.value;
    card.genre = metafield.genre.value;
    card.image = metafield.image.url;
    return card;
  }

  render() {
    const str = new RegExp(this.props.params.slug, 'i');
    const match = this.props.articles.filter(x => x.title.match(str));
    const cards = match.map(this.parseArticles);
    const renderCard = ({ title, id, date, brief, genre, image }, key) =>
      <Card
        key={key}
        id={id}
        title={title}
        date={date}
        brief={brief}
        genre={genre}
        image={image}
      />;
    return (
      <Panel>
        {cards.map(renderCard)}
      </Panel>
    );
  }
}

Search.propTypes = {
  articles: PropTypes.array,
};
const mapStateToProps = searchSelector();
export default connect(mapStateToProps)(Search);
