import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Menu from '../../Navigation/NavigationMenu';
import logo from '../../../img/logo-example.svg';

export default class SideDrawComponent extends React.Component {
    static propTypes = {
        showSideDraw: PropTypes.bool.isRequired,
        toggler: PropTypes.func.isRequired
    };

    state = {
        menuItems: [
            { label: 'O nas', path: '/o-nas' },
            { label: 'Nasze auto', path: '/nasze-auto' },
            { label: 'Cennik', path: 'cennik' },
            { label: 'Ogerta', path: 'oferta' },
            { label: 'Kontakt', path: '/kontakt' }
        ]
    }

    onSubmit = () => {

    }

    render() {
        const { menuItems } = this.state;
        const { showSideDraw, toggler } = this.props;

        return (
            <div className={showSideDraw ? 'open' : 'close'} id="side-draw-component">
                <header className="side-draw-header">
                    <Link to="/" className="navbar-item">
                        <figure className="image">
                            <img src={logo} alt="Logo" />
                        </figure>
                    </Link>
                    <div className="hamburger" onClick={toggler}><i className="fa fa-times" aria-hidden="true"></i></div>
                </header>
                {Boolean(showSideDraw) && <div onClick={toggler} className="navbar"><Menu menuItems={menuItems} /></div>}
            </div>
        );
    }
}
