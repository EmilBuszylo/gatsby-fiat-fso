import React from 'react'

import Carousel from 'nuka-carousel';

import Content from '../components/Content';
import Helmet from 'react-helmet'

import LogoF from '../img/logo-f.png'
import LogoS from '../img/logo-s.png'
import LogoO from '../img/logo-o.png'

export default class FrontPage extends React.Component {

  render() {
    const { markdownRemark } = this.props.data

    return (
      <div id="front-page">
        <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.title },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Carousel autoplay={true} wrapAround={true} autoplayInterval={4000}>
          <img src={markdownRemark.frontmatter.slider_img.image1.image} />
          <img src={markdownRemark.frontmatter.slider_img.image2.image} />
          <img src={markdownRemark.frontmatter.slider_img.image3.image} />
        </Carousel>
        <section className="carts-wrapper">
          <a className="slingle-cart" href="/cennik">
            <h3 className="cart-title">Fotki</h3>
            <img className="cart-img" src={LogoF} alt="Logo FSO literka F"/>
            <p className="cart-desc">Galeria zdjęć naszego auta<br/> i nie tylko..</p>
          </a>
          <a className="slingle-cart" href="/cennik">
            <h3 className="cart-title">Samochód</h3>
            <img className="cart-img" src={LogoS} alt="Logo FSO literka S"/>
            <p className="cart-desc">Wszystko co chciałbyś wiedziec<br/> o naszym aucie..</p>
          </a>
          <a className="slingle-cart" href="/cennik">
            <h3 className="cart-title">O nas</h3>
            <img className="cart-img" src={LogoO} alt="Logo FSO literka O"/>
            <p className="cart-desc">Wszystko co chciałbyś wiedzieć<br/> o nas samych..</p>
          </a>
        </section>
        <section className="page-content">
          <Content content={markdownRemark.html} />
        </section>
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
