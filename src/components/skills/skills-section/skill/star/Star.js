import React from 'react';

import { StyledStarIcon, StyledStarOutlineIcon } from './styles'

const Star = ({ strength, limit }) => (
  <span>
    {strength > limit ? (
      <StyledStarIcon width={20} height={20} />
    ) : (
        <StyledStarOutlineIcon width={20} height={20} />
      )}
  </span>
);

export default Star;
