import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header';

import '../theme/styles/index.scss';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
