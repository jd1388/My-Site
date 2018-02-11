import React from 'react';
import Link from 'gatsby-link';

import Styles from '../../styles/header';

const Header = () => (
    <div style={Styles.headerContainer}>
        <div style={Styles.linkContainer}>
            <Link to="/projects" style={Styles.link}>
                Projects
            </Link>
        </div>
    </div>
);

export default Header;
