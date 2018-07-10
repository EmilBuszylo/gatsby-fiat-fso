import './style.scss';

import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types'

import logo from '../../../img/warszawa-logo.png';

export default class BrandComponent extends React.Component {
    static propTypes = {
        path: PropTypes.string
    }

    static defaultProps = {
        path: '/'
    }

  render() {
      const {path} = this.props;

    return (
      <div id="brand-component">
          <Link to={path} className="navbar-item">
            <figure className="image">
              <img src={logo} alt="Logo" />
            </figure>
          </Link>
      </div>
    )
  }
}
