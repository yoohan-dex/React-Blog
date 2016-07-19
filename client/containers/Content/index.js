import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import { Panel } from '../../components/Layout';
import selector from './selectors';
class Content extends Component {
  render() {
    return (
      <Panel>
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
        <Card image="http://static.mnium.org/images/contenu/actus/LOL/Vi/lol_vi_neon_strike_artwork_hd.jpg" />
      </Panel>
    );
  }
}


const mapStateToProps = selector();

export default connect(mapStateToProps, null, null, { pure: false })(Content);
