import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Helmet>
            <title>Jared Griffin</title>
            <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                rel="stylesheet"
            />
        </Helmet>
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
