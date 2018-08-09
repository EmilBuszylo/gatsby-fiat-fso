import './style.scss';

import React from 'react';
import Social from '../Social';

import Brand from '../layout/Brand';

export default class FooterComponent extends React.Component {

  render() {

    const socialItems = {
      fb: {
        show: true,
        link: 'https://www.facebook.com/warszawadowynajecia/'
      },
      ins: {
        show: true,
        link: 'https://www.instagram.com/fsowarszawa223/'
      },
      mail: {
        show: true,
        link: 'damian.koluch@wp.pl'
      }
    }

    return (
      <div id="footer-component">
        <div className="wrapper">
          <Brand />
          <section className="social-wrapper">
            <Social socialItems={socialItems} />
          </section>
        </div>
      </div>
    )
  }
}
