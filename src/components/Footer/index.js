import './style.scss';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'

import Brand from '../layout/Brand';

export default class FooterComponent extends React.Component {

  render() {

    return (
      <div id="footer-component">
        <div className="wrapper">
            <Brand />
            <div className="quick-contact">
                <div>777 666 555</div>
                <div>warszawafso@gmail.com</div>
            </div>
            <div className="social">
                <div className="facebook-icon">FB</div>
                <div className="instagram-icon">IN</div>
                <div className="gmail-icon">GM</div>
            </div>
        </div>
      </div>
    )
  }
}
