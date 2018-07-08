import './styles.scss';

import React from 'react';
import PropTypes from 'prop-types';

export default class BackDropComponent extends React.Component {
    static propTypes = {
        toggler: PropTypes.func
    };

    render() {
        const { toggler } = this.props;

        return (
            <div role="component" id="back-drop-component" onClick={toggler}></div>
        );
    }
}
