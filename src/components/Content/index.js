import React from 'react'
import PropTypes from 'prop-types'

const Content = ({ content, style }) => (
    <div className={style ? style : 'defaultContent'} dangerouslySetInnerHTML={{ __html: content }} />
)

Content.propTypes = {
    content: PropTypes.string.isRequired,
    style: PropTypes.string,
}

export default Content;
