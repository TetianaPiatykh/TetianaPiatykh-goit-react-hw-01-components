import styled from 'styled-components';

export const FriendItemStyled = styled.li`
display: flex;
// flex-direction: column;
font-size: 16px;
// width: calc(100% / 3);
text-align: center;
align-items: center;
gap: 15px;
padding: 10px;
 box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072);
`;

export const Span = styled.span`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${p => p.isOnline ? 'green' : 'red'};

`;

export const NameSpan = styled.span`
font-size: 20px;
font-weight: 700;
`;