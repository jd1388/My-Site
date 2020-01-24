import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const SkillsContainer = styled.div`
    align-items: center;
    background-color: ${Colors.white};
    color: ${Colors.black};
    display: flex;
    font-family: Roboto, san-serif;
    justify-content: center;
    width: 100%;
`;

export const SkillsContent = styled.div`
    padding: 50px 10%;
    min-width: 80%;

    @media (min-width: 800px) {
        padding: 50px 25%;
        min-width: 970px;
    }
`;

export const SkillsHeader = styled.h2`
    color: ${Colors.blue};
    font-size: 36pt;
    font-weight: normal;
    margin: 0;
    text-align: center;

    @media (min-width: 800px) {
        font-size: 48pt;
    }
`;
