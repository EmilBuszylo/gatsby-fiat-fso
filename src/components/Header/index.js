import './style.scss';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'

import Menu from '../Navigation/NavigationMenu';
import Brand from '../layout/Brand';

export default class HeaderComponent extends React.Component {
  static propTypes = {
    toggler: PropTypes.func.isRequired
  };

  state = {
    menuItems: [
      { label: 'O nas', path: '/o-nas' },
      { label: 'Nasze auto', path: '/nasze-auto' },
      { label: 'Cennik', path: '/cennik' },
      { label: 'Oferta', path: '/oferta' },
      { label: 'Galeria', path: '/galeria' },
      { label: 'Kontakt', path: '/kontakt' }
    ]
  }

  render() {
    const { menuItems } = this.state;
    const { toggler } = this.props;

    return (
      <nav id="header-component">
        <Brand />
        <div className="navigation">
          <div className="mobile-control">
            <div className="hamburger" onClick={toggler}><i className="fa fa-bars " aria-hidden="true" ></i></div>
          </div>
          <Menu menuItems={menuItems} />
        </div>
      </nav>
    )
  }
}
