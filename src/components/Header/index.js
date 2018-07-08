import './style.scss';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'

import Menu from '../Navigation/NavigationMenu';
import logo from '../../img/logo-example.svg';

export default class Header extends React.Component {
  static propTypes = {
    toggler: PropTypes.func.isRequired
  };

  state = {
    menuItems: [
      { label: 'O nas', path: '/o-nas' },
      { label: 'Nasze auto', path: '/nasze-auto' },
      { label: 'Cennik', path: 'cennik' },
      { label: 'Ogerta', path: 'oferta' },
      { label: 'Kontakt', path: '/kontakt' }
    ]
  }

  render() {
    const { menuItems } = this.state;
    const { toggler } = this.props;

    return (
      <nav id="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Logo" />
            </figure>
          </Link>
        </div>
        <div className="navigation">
          <div className="mobile-control">
            <div className="hamburger" onClick={toggler}><i className="fa fa-bars " aria-hidden="true" >Menu</i></div>
          </div>
          <Menu menuItems={menuItems} />
        </div>
      </nav>
    )
  }
}
