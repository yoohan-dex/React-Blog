import React, { Component, PropTypes } from 'react';
import Panel from '../../components/Panel';
import Self from '../../components/Self';
import AboutText from '../../components/About';
import config from '../config';
class About extends Component {
  componentDidMount() {
    document.title = `About - ${config.site.title} `;
  }
  render() {
    return (
      <Panel>
        <AboutText />
        <Self />
      </Panel>
    );
  }
}

About.propTypes = {

};

export default About;
