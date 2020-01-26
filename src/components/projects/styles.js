import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const ProjectsContainer = styled.div`
    align-items: center;
    background-color: ${Colors.silver};
    border: 1 solid transparent;
    box-shadow: 0px 4px 20px 0px rgba(0,0,0,0.75);
    color: ${Colors.white};
    display: flex;
    font-family: Roboto, sans-serif;
    justify-content: center;
    min-height: 95vh;
    padding: 5vh 0;
`;

export const ProjectsContent = styled.div`
    padding: 50px 10%;

    @media (min-width: 800px) {
        padding: 50px 25%;
    }
`;

export const ProjectsHeader = styled.h2`
    color: ${Colors.blue};
    font-size: 36pt;
    font-weight: normal;
    margin: 0;
    text-align: center;

    @media (min-width: 800px) {
        font-size: 48pt;
    }
`;
