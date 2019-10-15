import React from 'react';

import Star from './star';
import { SkillEntryContainer, SkillEntryHeader } from './styles';

const Skill = ({
  skill,
  strength
}) => (
    <SkillEntryContainer>
      <SkillEntryHeader>
        {skill}
      </SkillEntryHeader>
      <div>
        <Star strength={strength} limit={0} />
        <Star strength={strength} limit={1} />
        <Star strength={strength} limit={2} />
        <Star strength={strength} limit={3} />
        <Star strength={strength} limit={4} />
      </div>
    </SkillEntryContainer>
  );

export default Skill;
