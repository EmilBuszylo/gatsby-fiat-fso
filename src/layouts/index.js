import '../theme/styles/index.scss';
import './style.scss';

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header';
import Footer from '../components/Footer';
import BackDrop from '../components/layout/BackDrop';
import SideDraw from '../components/layout/SideDraw';

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
    console.log(this.props)

    return (
      <div id="layout">
        <Header toggler={this.openSideDrawHandler} />
        {Boolean(showSideDraw) &&
          <BackDrop toggler={showSideDraw ? this.openSideDrawHandler : null} />
        }
        <SideDraw showSideDraw={showSideDraw} toggler={this.openSideDrawHandler} />
        {this.props.children()}
        <Footer />
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
      }
    }
  }
`;
