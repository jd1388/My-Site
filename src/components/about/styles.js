import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Hero = styled.h1`
    font-size: 90pt;
    color: ${Colors.blue};
    font-weight: 400;
    padding-top: 15vh;
    margin-bottom: 0;
    align-self: center;

    @media (min-width: 800px) {
        font-size: 160pt;
        padding-top: 20vh;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
    height: 95vh;
    min-height: 800px;
    font-family: Roboto, sans-serif;

    @media (min-width: 800px) {
        padding: 0 25%;
        min-height: 1000px;
    }
`;

export const SectionContent = styled.div`
    text-align: justify;
    font-weight: 300;
    color: ${Colors.black};
    flex-grow: 1;
    display: flex;
    align-items: center;
`;
