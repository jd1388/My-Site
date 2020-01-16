import styled from 'styled-components';

export const SkillEntryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    width: 100%;

    &:nth-child(3n - 1) {
        grid-column-start: 3;
    }

    &:nth-child(3n) {
        grid-column-start: 5;
    }
`;

export const SkillEntryHeader = styled.span`
    font-size: 15pt;
    font-weight: 300;
`;
