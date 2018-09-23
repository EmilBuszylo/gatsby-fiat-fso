import '../theme/styles/index.scss';
import './style.scss';

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackDrop from '../components/layout/BackDrop';
import SideDraw from '../components/layout/SideDraw';

import favicon32x32 from '../../static/img/favicons/favicon-32x32.png';
import favicon16 from '../../static/img/favicons/favicon-16x16.png';
import safariPinned from '../../static/img/favicons/safari-pinned-tab.svg';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  state = {
    showSideDraw: false
  }

  componentDidMount = () => {
    this.setState(prevState => ({ ...prevState, showSideDraw: false }));
  }

  openSideDrawHandler = () => {
    this.setState((prevState) => {
      return { ...this.state, showSideDraw: !prevState.showSideDraw };
    });
  }

  render() {
    const { showSideDraw } = this.state;

    return (
      <div id="layout">
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon32x32}` },
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon16}` },
            { rel: 'mask-icon', type: 'image/png', href: `${safariPinned}` },
            {
              rel: 'stylesheet',
              href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
              integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
              crossorigin: "anonymous"
            },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Lato:400,700|Open+Sans:300,400,600" },
            { rel: 'apple-touch-icon', sizes: "180x180" }
          ]}
        >
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <div className="container">
          <Header toggler={this.openSideDrawHandler} />
          {Boolean(showSideDraw) &&
            <BackDrop toggler={showSideDraw ? this.openSideDrawHandler : null} />
          }
          <SideDraw showSideDraw={showSideDraw} toggler={this.openSideDrawHandler} />
          <div className="hero" style={{ backgroundImage: "url(./img/warszawa_slider2.jpg)" }}></div>
          {this.props.children()}
          <Footer />
        </div>
      </div>
    )
  }
}

export const query = graphql`
query Query {
    markdownRemark {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;
