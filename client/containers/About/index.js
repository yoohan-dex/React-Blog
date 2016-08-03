import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import aboutSelector from '../Main/selectors';

import Panel from '../../components/Panel';
import Self from '../../components/Self';
import AboutText from '../../components/About';
import config from '../config';
class About extends Component {
  componentDidMount() {
    document.title = `About - ${config.site.title} `;
  }
  render() {
    const { about } = this.props;
    return (
      <Panel>
        <AboutText content={about} />
        <Self />
      </Panel>
    );
  }
}

About.propTypes = {
  about: PropTypes.string,
};
const mapStateToProps = aboutSelector();


export default connect(mapStateToProps, null, null, { pure: false })(About);
