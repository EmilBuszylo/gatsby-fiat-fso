import './style.scss';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'
import Social from '../Social';

import Brand from '../layout/Brand';

export default class FooterComponent extends React.Component {

  render() {

    const socialItems = {
      fb: {
        show: true,
        link: 'https://facebook.com'
      },
      ins: {
        show: true,
        link: 'https://intsa.com'
      },
      mail: {
        show: true,
        link: 'mail'
      }
    }

    return (
      <div id="footer-component">
        <div className="wrapper">
            <Brand />
            <section className="social-wrapper">
              <Social socialItems={socialItems}/>
            </section>
        </div>
      </div>
    )
  }
}
