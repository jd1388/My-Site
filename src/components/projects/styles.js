import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const ProjectsContainer = styled.div`
    min-height: 95vh;
    background-color: ${Colors.silver};
    font-family: Roboto, sans-serif;
    color: ${Colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: skewY(2deg);
    box-shadow: 0px 4px 20px 0px rgba(0,0,0,0.75);
    border: 1 solid transparent;
    padding: 5vh 0;
    filter: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter id="gaussian_blur"><feGaussianBlur in="SourceGraphic" stdDeviation="0" /></filter></defs></svg>#gaussian_blur');
`;

export const ProjectsContent = styled.div`
    padding: 50px 10%;
    transform: skewY(-2deg);

    @media (min-width: 800px) {
        padding: 50px 25%;
    }
`;

export const ProjectsHeader = styled.h2`
    font-weight: normal;
    font-size: 36pt;
    margin: 0;
    text-align: center;
    color: ${Colors.blue};

    @media (min-width: 800px) {
        font-size: 48pt;
    }
`;
