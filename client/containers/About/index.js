import React, { Component, PropTypes } from 'react';
import Panel from '../../components/Panel';
import Self from '../../components/Self';
import AboutText from '../../components/About';
class About extends Component {
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
