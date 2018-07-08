import './style.scss';

import React from 'react'
import PropTypes from 'prop-types'

import Item from '../NavigationItem';

export default class Navigation extends React.Component {
    static propTypes = {
        menuItems: PropTypes.array
    }

    render() {
        const { menuItems } = this.props;

        return (
            <nav id="menu">
                <ul className="menu-list">
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
