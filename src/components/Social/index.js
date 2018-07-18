import './style.scss';

import React from 'react'
import PropTypes from 'prop-types'

export default class SocialComponent extends React.Component {
    static propTypes = {
        socialItems: PropTypes.shape({
            yt: PropTypes.shape({
                show: PropTypes.bool,
                link: PropTypes.string 
            }),
            fb: PropTypes.shape({
                show: PropTypes.bool,
                link: PropTypes.string 
            }),
            in: PropTypes.shape({
                show: PropTypes.bool,
                link: PropTypes.string 
            }),
            p: PropTypes.shape({
                show: PropTypes.bool,
                link: PropTypes.string 
            }),
            mail: PropTypes.shape({
                show: PropTypes.bool,
                link: PropTypes.string 
            }),
            phone: PropTypes.shape({
                show: PropTypes.bool,
                link: PropTypes.string 
            })
        })
    }

    render() {
        const { yt, fb, ins, p, mail, phone } = this.props.socialItems;

        return (
            <ul id="social-component">
                {Boolean(yt)  && <div className="media-icon"><a href={yt.link}><i className="fab fa-youtube" aria-hidden="true"></i></a></div> }
                {Boolean(fb)  && <div className="media-icon"><a href={fb.link}><i className="fa fa-facebook" aria-hidden="true"></i></a></div> }
                {Boolean(ins)  && <div className="media-icon"><a href={ins.link}><i className="fa fa-instagram" aria-hidden="true"></i></a></div> }
                {Boolean(p)  && <div className="media-icon"><a href={p.link}><i className="fab fa-pinterest-p" aria-hidden="true"></i></a></div> }
                {Boolean(mail)  && <div className="media-icon"><a href={mail.link}><i className="fa fa-envelope-o" aria-hidden="true"></i></a></div> }
                {Boolean(phone)  && <div className="media-icon"><a href={mail.link}><i className="fa fa-phone-square" aria-hidden="true"></i></a></div> }
            </ul>
        )
    }
}
