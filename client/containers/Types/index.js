import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Panel from '../../components/Panel';
import genreSelector from '../Main/selectors';

class Genre extends Component {
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
    const match = this.props.articles.filter(x => x.metafield.genre.value === this.props.params.genre);
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

Genre.propTypes = {
  articles: PropTypes.array,
};
const mapStateToProps = genreSelector();
export default connect(mapStateToProps)(Genre);
