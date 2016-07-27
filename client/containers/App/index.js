import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import Stage from '../../components/Stage';
import AsideBar from '../../components/AsideBar';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import Loading from '../../components/Loading';
import appSeletor from './selectors';
import { loadApp, loadSuccess, search } from './actions';
import path from './config';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadData();
  }
  search() {

  }
  render() {
    const { ready, error, title } = this.props;

    if (!ready) {
      return <Loading type="bubbles" color="#CE9296" />;
    }

    return (
      <Layout>
        <Tabs path={path} menu={title} searchData={this.props.searchData} />
        <Stage>
          <AsideBar genres={this.props.genres} />
          {this.props.children}
        </Stage>
      </Layout>


    );
  }
}
const mapStateToProps = appSeletor();
function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadApp()),
    searchData: (slug) => dispatch(search(slug)),
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: true })(App);
