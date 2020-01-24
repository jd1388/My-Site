import styled from 'styled-components';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import Colors from '../../styles/Colors';

export const FooterContainer = styled.div`
    align-items: center;
    background-color: ${Colors.gray};
    height: 5vh;
    min-height: 100px;
    color: ${Colors.white};
    display: flex;
    justify-content: space-around;
    padding: 0 10%;
    font-size: 12pt;

    @media (min-width: 800px) {
        padding: 0 25%;
    }
`;

export const StyledLinkedinIcon = styled(LinkedinIcon)`
    fill: ${Colors.white};
    height: 20px;
    width: 20px;
`;

export const StyledGithubIcon = styled(GithubCircleIcon)`
    fill: ${Colors.white};
    height: 20px;
    width: 20px;
`;

export const StyledEmailIcon = styled(EmailIcon)`
    fill: ${Colors.white};
    height: 20px;
    width: 20px;
`;
