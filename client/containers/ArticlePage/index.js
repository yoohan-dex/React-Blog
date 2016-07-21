import React, {Component, PropTypes} from 'react';
import Panel from '../../components/Panel';
import Article from '../../components/Article';
class ArticlePage extends Component {
  render() {
    return (
      <Panel>
        <Article image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
      </Panel>
    );
  }
}

ArticlePage.propTypes = {

};

export default ArticlePage;