import styled from 'styled-components';

import Colors from '../../../styles/Colors';

export const ExperienceEntryContainer = styled.div`
    
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: 1fr;


    &:last-child {
        margin-bottom: 0;
    }

    @media (min-width: 800px) {
        grid-template-columns: 30% 5% 65%;
    }
`;

export const ExperienceEntryHeader = styled.h4`
    font-weight: normal;
    color: ${Colors.white};
    text-align: left;
    font-size: 12pt;
    margin: 0;
    grid-column: 1;
    margin-bottom: 8px;

    @media (min-width: 800px) {
        font-size: 16pt;
    }
`;

export const ExperienceEntryContent = styled.p`
    font-weight: 300;
    text-align: justify;
    margin: 0;
    grid-column: 1;
    font-size: 12pt;

    @media (min-width: 800px) {
        grid-column: 3;
        font-size: 16pt;
    }
`;

export const ExperienceEntryDates = styled(ExperienceEntryContent)`
    grid-column: 1;
    text-align: left;
    margin-bottom: 8px;

    @media (min-width: 800px) {
        grid-row: 1;
        margin-bottom: 0;
    }
`;

export const ExperienceEntryPosition = styled(ExperienceEntryHeader)`
    grid-row: 2;

    @media (min-width: 800px) {
        grid-column: 1;
    }
`;
