import './styles.scss';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { camelCaseToDash } from 'Helpers/String';

export default class SpinnerComponent extends Component {
    static propTypes = {
        text: PropTypes.string,
        className: PropTypes.string
    };
    static defaultProps = {
        text: '',
        className: ''
    };

    render() {
        const { className, text } = this.props;

        return (
            <div role="component" id={camelCaseToDash(this.constructor.name)} className={`animted fadeIn ${className}`}>
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
                {text ? <p className="spinner-text">{text}</p> : null}
            </div>
        );
    }
}
