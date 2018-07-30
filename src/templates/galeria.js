import React from 'react'

import Gallery from 'react-grid-gallery';
import Helmet from 'react-helmet'

import Spinner from '../components/layout/Spinner';

export default class GalleryPage extends React.Component {

    componentDidMount() {
        const { markdownRemark } = this.props.data
        const galleryArray = markdownRemark.html.replace(/<p>|<\/p>|<img|src=|"|>|\\|\n/gim, '').split('!');
        let images = [];

        for (let i = 1; i <= galleryArray.length; i++ ) {
            images.push({
                src: galleryArray[i -1].replace(/alt=.+/gim, ''),
                thumbnail: galleryArray[i -1].replace(/alt=.+/gim, ''),
                thumbnailWidth: Math.floor((Math.random() * 320) + 160),
                thumbnailHeight: 190,
            })

            if (i === galleryArray.length) {
                this.setState({...this.state, loading: false})
            }
        }

        this.setState({...this.state, images: images})
    }

    state = {
        images: [],
        loading: true
    }

  render() {
    const { markdownRemark } = this.props.data

    return (
      <div id="gallery" className="page">
        <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.seoTitle },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: markdownRemark.frontmatter.keyWords },
          ]}
        />
        <h1 className="page-title">{markdownRemark.frontmatter.title}</h1>
        {(!this.state.images.length && this.state.loading) ?
            <Spinner /> 
            :
            <div className="gallery-wrapper"><Gallery  images={this.state.images} enableImageSelection={false}/></div>}
      </div>
    )
  }
}

export const galleryPage = graphql`
query GalleryPage($id: String!) {
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
