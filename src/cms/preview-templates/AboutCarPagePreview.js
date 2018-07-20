import React from 'react';
import PropTypes from 'prop-types';
import AboutCarPage  from '../../templates/nasze-auto.js';

const AboutCarPagePreview = ({entry, widgetFor }) => {
    <AboutCarPage/>
}

AboutCarPagePreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
  }
  
  export default AboutCarPagePreview