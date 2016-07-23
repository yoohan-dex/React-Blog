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
import { loadApp, loadSuccess } from './actions';
import path from './config';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { ready, error, title } = this.props;

    if (!ready) {
      return <Loading type="bubbles" color="#CE9296" />;
    }

    return (
      <Layout>
        <Tabs path={path} menu={title}>
          <Tab label="article" />
          <Tab label="archives" />
        </Tabs>
        <Stage>
          <AsideBar />
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
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
