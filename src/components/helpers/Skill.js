import React from 'react';

import Star from './Star';

import Styles from '../../styles/Skills';

const Skill = ({
  skill,
  strength,
  index,
  mobile,
}) => (
  <div style={mobile ? Styles.mobileSkillEntryContainer : Styles.skillEntryContainer}>
    <span
      style={
        index % 3 < 2 || mobile
          ? Styles.skillEntryHeader
          : Object.assign({}, Styles.skillEntryHeader, { marginLeft: '7.5%' })
      }
    >
      {skill}
    </span>
    <div style={index % 3 < 2 && !mobile ? Object.assign({}, { marginRight: '7.5%' }) : {}}>
      <Star strength={strength} limit={0} />
      <Star strength={strength} limit={1} />
      <Star strength={strength} limit={2} />
      <Star strength={strength} limit={3} />
      <Star strength={strength} limit={4} />
    </div>
  </div>
);

export default Skill;
