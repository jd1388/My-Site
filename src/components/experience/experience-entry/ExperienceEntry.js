import React from 'react';

import {
  ExperienceEntryContainer,
  ExperienceEntryHeader,
  ExperienceEntryContent,
  ExperienceEntryDates,
  ExperienceEntryPosition
} from './styles'

const ExperienceEntry = ({ experience }) => {
  const {
    location,
    dates,
    position,
    description,
  } = experience;

  return (
    <ExperienceEntryContainer>
      <ExperienceEntryHeader>{location}</ExperienceEntryHeader>
      <ExperienceEntryDates>{dates}</ExperienceEntryDates>
      <ExperienceEntryPosition>{position}</ExperienceEntryPosition>
      <ExperienceEntryContent>{description}</ExperienceEntryContent>
    </ExperienceEntryContainer>
  );
};

export default ExperienceEntry;
