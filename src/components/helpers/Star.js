import React from 'react';

import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';

import Styles from '../../styles/Skills';

const Star = ({ strength, limit }) => (
  <span>
    {strength > limit ? (
      <StarIcon style={Styles.skillIcon} width={20} height={20} />
    ) : (
      <StarOutlineIcon style={Styles.skillIcon} width={20} height={20} />
    )}
  </span>
);

export default Star;
