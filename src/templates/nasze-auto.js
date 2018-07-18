import React from 'react'

import Carousel from 'nuka-carousel';

import Content from '../components/Content';
import Helmet from 'react-helmet'

export default class AboutCarPage extends React.Component {

  render() {
    const { markdownRemark } = this.props.data

    console.log(this.props)
    return (
      <div id="about-car-page" className="page">
        <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.seoTitle },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: markdownRemark.frontmatter.keyWords },
          ]}
        />
        <h1 className="page-title">{markdownRemark.frontmatter.title}</h1>
        <Content content={markdownRemark.html} />
      </div>
    )
  }
}

export const aboutCarPage = graphql`
query AboutCarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        path
        seoTitle
        keyWords
        description
      }
    }
  }
`;
