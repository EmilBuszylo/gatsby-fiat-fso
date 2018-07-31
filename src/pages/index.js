import React from 'react'

import Carousel from 'nuka-carousel';

import Content from '../components/Content';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import LogoF from '../img/logo-f.png';
import LogoS from '../img/logo-s.png';
import LogoO from '../img/logo-o.png';

export default class FrontPage extends React.Component {

  objectToArray = (obj) => {
    return Object.keys(obj).map(item => obj[item]);
  }

  render() {
    const { markdownRemark } = this.props.data;
    let contentText;

    const logos = [LogoF, LogoS, LogoO ]

    if(markdownRemark) {
      contentText = markdownRemark.html.split('!'); 
    }

    return (
      <div id="front-page">
        <Helmet
          meta={[
            { name: 'title', content: markdownRemark.frontmatter.title },
            { name: 'description', content: markdownRemark.frontmatter.description },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <div className="slider-wrapper">
          <Carousel autoplay={true} wrapAround={true} autoplayInterval={4000}
            renderCenterLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}><i className="fa fa-chevron-left" aria-hidden="true"></i></button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}><i className="fa fa-chevron-right" aria-hidden="true"></i></button>
            )}
          >         
            <img src={markdownRemark.frontmatter.slider_img.image1.image} />
            <img src={markdownRemark.frontmatter.slider_img.image2.image} />
            <img src={markdownRemark.frontmatter.slider_img.image3.image} />
          </Carousel>
        </div>
        {Boolean(markdownRemark.frontmatter.fso_card) &&
          <section className="carts-wrapper">
            {this.objectToArray(markdownRemark.frontmatter.fso_card).map((item, index) => {
              return (
                <a className="slingle-cart" key={item.link + item.title} href={item.link}>
                  <img className="cart-img" src={logos[index]} alt={item.title}/>
                  <h3 className="cart-title">{item.title}</h3>
                  <p className="cart-desc">{item.content}</p>
              </a>
              )
            })}
          </section>
        }
        <section className="front-page-items">
          {Boolean(markdownRemark.frontmatter.info_card) &&
            this.objectToArray(markdownRemark.frontmatter.info_card).map((card, index) => {
              return (
                <article className="item" key={card.title + card.link}>
                <header className="item-header">
                    <div className="item-header-img" style={{ backgroundImage: `url("${card.image}")` }}></div>
                    <h4>{card.title}</h4>
                </header>
                <Content content={contentText[index]} />
                <footer className="item-footer">
                  <Link to={card.link} className="link">Czytaj więcej</Link>
                </footer>
              </article>
              )
            })
          }
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
        fso_card {
          card1 {
            title
            content
            link
          }
          card2 {
            title
            content
            link
          }
          card3 {
            title
            content
            link
          }
        }
        info_card {
          image1 {
            title
            image
            link
          }
          image2 {
            title
            image
            link
          }
          image3 {
            title
            image
            link
          }
          image4 {
            title
            image
            link
          }
        }
      }
    }
  }
`;
