import React from 'react'

import Content from '../components/Content';
import Helmet from 'react-helmet'

export default class Kontakt extends React.Component {

  render() {
    const { markdownRemark } = this.props.data

    return (
      <div id="contact" className="page">
        <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.seoTitle },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: markdownRemark.frontmatter.keyWords },
          ]}
        />
        <h1 className="page-title">{markdownRemark.frontmatter.title}</h1>
        <Content content={markdownRemark.html} />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.6987729331354!2d20.934358115638847!3d52.285170461358284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eca2e21c359b3%3A0xe65aa706839aee48!2sDantego%2C+Warszawa!5e0!3m2!1spl!2spl!4v1532931132923" className="contact-map" frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}

export const contactPage = graphql`
query ContactPage($id: String!) {
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
