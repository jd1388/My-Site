import React from 'react';

import Star from './star';

import Styles from '../../styles';

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
            : { ...Styles.skillEntryHeader, marginLeft: '7.5%' }
        }
      >
        {skill}
      </span>
      <div style={index % 3 < 2 && !mobile ? { marginRight: '7.5%' } : {}}>
        <Star strength={strength} limit={0} />
        <Star strength={strength} limit={1} />
        <Star strength={strength} limit={2} />
        <Star strength={strength} limit={3} />
        <Star strength={strength} limit={4} />
      </div>
    </div>
  );

export default Skill;
