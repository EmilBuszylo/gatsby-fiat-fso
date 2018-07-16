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
            })
        })
    }

    render() {
        const { yt, fb, ins, p, mail } = this.props.socialItems;

        return (
            <ul id="social-component">
                {Boolean(yt)  && <div class="media-icon"><a href={yt.link}><i class="fab fa-youtube" aria-hidden="true"></i></a></div> }
                {Boolean(fb)  && <div class="media-icon"><a href={fb.link}><i class="fa fa-facebook" aria-hidden="true"></i></a></div> }
                {Boolean(ins)  && <div class="media-icon"><a href={ins.link}><i class="fa fa-instagram" aria-hidden="true"></i></a></div> }
                {Boolean(p)  && <div class="media-icon"><a href={p.link}><i class="fab fa-pinterest-p" aria-hidden="true"></i></a></div> }
                {Boolean(mail)  && <div class="media-icon"><a href={mail.link}><i class="fa fa-envelope-o" aria-hidden="true"></i></a></div> }
            </ul>
        )
    }
}
