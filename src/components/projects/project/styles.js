import styled from 'styled-components';

import Colors from '../../../styles/Colors';

export const ProjectContainer = styled.div`
    padding-bottom: 5px;

    &:last-child {
        padding-bottom: 0;
    }
`;

export const ProjectName = styled.h3`
    font-weight: 300;
    font-size: 18pt;
    color: ${Colors.blue};

    @media (min-width: 800px) {
        font-size: 22pt;
    }
`;

export const ProjectDescription = styled.p`
    font-weight: 300;
    text-align: justify;
    font-size: 12pt;

    @media (min-width: 800px) {
        font-size: 16pt;
    }
`;
