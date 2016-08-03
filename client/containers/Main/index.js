import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Panel from '../../components/Panel';
import mainSelector from './selectors';
import config from '../config';
class Main extends Component {
  componentDidMount() {
    document.title = config.site.title;
  }
  parseArticles({ title, created, _id, metafield }) {
    const card = {};
    const time = new Date(created);
    card.title = title;
    card.id = _id;
    card.date = `${time.getFullYear()}/${time.getMonth()}/${time.getDate()}`;
    card.genre = metafield.genre.value;
    card.image = metafield.image.url;
    return card;
  }

  render() {
    const cards = this.props.articles.map(this.parseArticles);
    const renderCard = ({ title, id, date, genre, image }, key) =>
      <Card
        key={key}
        id={id}
        title={title}
        date={date}
        genre={genre}
        image={image}
        main
      />;
    return (
      <Panel>
        {cards.map(renderCard)}
      </Panel>
    );
  }
}

Main.propTypes = {
  articles: PropTypes.array,
};
const mapStateToProps = mainSelector();
export default connect(mapStateToProps, null, null, { pure: false })(Main);
