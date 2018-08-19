import React from 'react';

import Styles from '../../styles/Footer';

const FooterLink = ({ url, icon, link }) => (
  <div>
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      style={Styles.footerLink}
    >
      <span>{icon}</span>
      <span style={Styles.footerLinkText}>{link}</span>
    </a>
  </div>
);

export default FooterLink;
