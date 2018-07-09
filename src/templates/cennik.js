import React from 'react'

import Carousel from 'nuka-carousel';

import Content from '../components/Content';
import Helmet from 'react-helmet'

export default class Cennik extends React.Component {

  render() {
    // const { markdownRemark } = this.props.data

    console.log(this.props)
    return (
      <div id="pircing">
        {/* <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.title },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
        /> */}
        {/* <Carousel autoplay={true} wrapAround={true} autoplayInterval={4000}>
          <img src={markdownRemark.frontmatter.slider_img.image1.image} />
          <img src={markdownRemark.frontmatter.slider_img.image2.image} />
          <img src={markdownRemark.frontmatter.slider_img.image3.image} />
        </Carousel>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <Content content={markdownRemark.html} /> */}
      </div>
    )
  }
}

export const pircingPage = graphql`
query PircingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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