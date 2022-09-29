import styled from 'styled-components';

export const StatItem = styled.li`
display: flex;
flex-direction: column;
text-align: center;
// padding: 3px;
width: calc(100% / 5);
background-color: green;
border: 1px solid;
`;

export const Label = styled.span`
font-size: 14px;
`;

export const Percentage = styled.span`
font-size: 30px;
font-weight: 700;
`;