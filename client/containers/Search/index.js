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
    const matchCard = () => {
      let match;
      let cards = [];
      if (this.props.params.slug) {
        const str = new RegExp(this.props.params.slug, 'i');
        match = this.props.articles.filter(x => x.title.match(str));
      }
      if (this.props.params.genre) {
        match = this.props.articles.filter(x => x.metafield.genre.value === this.props.params.genre);
      }
      if (this.props.params.date) {
        match = this.props.articles.filter(x => {
          const time = new Date(x.created);
          const months = time.getMonth();
          return parseInt(this.props.params.date, 10) === months;
        });
      }
      cards = match.map(this.parseArticles);
      return cards;
    };


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
        {matchCard().map(renderCard)}
      </Panel>
    );
  }
}

Search.propTypes = {
  articles: PropTypes.array,
};
const mapStateToProps = searchSelector();
export default connect(mapStateToProps)(Search);
