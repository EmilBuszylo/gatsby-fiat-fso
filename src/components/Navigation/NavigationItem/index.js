import './style.scss';

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

export default class PortalNavigationMenuItemComponent extends React.Component {
    static propTypes = {
        path: PropTypes.string,
        label: PropTypes.string,
        target: PropTypes.string,
        icon: PropTypes.string,
    };

    static defaultProps = {
        label: ''
    };

    render() {
        const { label, path, target, icon } = this.props;

        return (
            <li id="nav-item">
                {icon && <img src={icon} />}
                <Link activeClassName="active" className="nav-link" to={path} target={target}>{label}</Link>
            </li>
        );
    }
}
