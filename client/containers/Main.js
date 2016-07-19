import React, { Component } from 'react';
import Card from '../components/Card';
import { Panel } from '../components/Layout';
class Main extends Component {
  render() {
    return (
      <Panel>
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
        <Card image="http://tweeterism.com/wp-content/uploads/2013/04/LOL-Cat.jpeg" />
      </Panel>
    );
  }
}

export default Main;
