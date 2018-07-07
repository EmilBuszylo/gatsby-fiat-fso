import React from 'react'
import Content from '../components/Content';
import Helmet from 'react-helmet'

export default class FrontPage extends React.Component {

  render() {
    const { markdownRemark } = this.props.data

    console.log(this.props)
    return (
      <div id="front-page">
        <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.title },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <h1>{markdownRemark.frontmatter.title}</h1>
        <Content content={markdownRemark.html} />
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
      }
    }
  }
`;
