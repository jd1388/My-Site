import React from 'react';

import { Link, LinkText } from './styles';

const FooterLink = ({ url, icon, link }) => (
  <div>
    <Link
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span>{icon}</span>
      <LinkText>{link}</LinkText>
    </Link>
  </div>
);

export default FooterLink;
