import styled from 'styled-components';

import Colors from '../../../styles/Colors';

export const SkillSectionHeader = styled.h3`
    font-weight: 300;
    font-size: 18pt;
    color: ${Colors.blue};

    @media (min-width: 800px) {
        font-size: 22pt;
    }
`;

export const SkillSectionEntries = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: 30% 1fr 30% 1fr 30%;
    }
`;
