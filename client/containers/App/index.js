import React from 'react';
import { Link } from 'react-router';
import Layout from '../../components/Layout';
import Stage from '../../components/Stage';
import AsideBar from '../../components/AsideBar';
import Nav from '../../components/Nav';
import Tabs from '../../components/Tabs';
import Tab from '../../components/Tab';
import Card from '../../components/Card';
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      logo: false,
    };
    this.handleLogo = this.handleLogo.bind(this);
  }
  handleLogo() {
    this.setState({
      logo: !this.state.logo,
    });
  }

  render() {
    const path = [
      '/content',
      '/',
    ];


    return (
      <Layout>
        
          <Tabs path={path} logoOnClick={this.handleLogo}>
            <Tab label="article" />
            <Tab label="archives" />
          </Tabs>
          
          <Stage logoState={this.state.logo}>
            <AsideBar logoState={this.state.logo} />
            {this.props.children}
          </Stage>

          

      </Layout>


    );
  }
}

export default App;
