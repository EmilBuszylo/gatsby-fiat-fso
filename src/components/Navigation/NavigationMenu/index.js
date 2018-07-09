import './style.scss';

import React from 'react'
import PropTypes from 'prop-types'

import Item from '../NavigationItem';

export default class NavigationComponent extends React.Component {
    static propTypes = {
        menuItems: PropTypes.array
    }

    render() {
        const { menuItems } = this.props;

        return (
            <nav id="navigation-component">
                <ul className="navigation-list">
                    {menuItems.map(item =>
                        <Item
                            {...item}
                            key={item.label + item.path}
                        />
                    )}
                </ul>
            </nav>
        )
    }
}
