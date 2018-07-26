import React from 'react'

import FrontPage from '../templates/front-page';

export default class IndexPage extends React.Component {

  objectToArray = (obj) => {
    return Object.keys(obj).map(item => obj[item]);
  }

  render() {
    const { markdownRemark } = this.props.data;

    return (
      <div id="IndexPage">
        <FrontPage data={markdownRemark}/>
      </div>
    )
  }
}

export const frontPage = graphql`
query FrontPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        slider_img {
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
      }
    }
  }
`;