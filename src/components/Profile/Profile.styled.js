// import React from 'react';
import styled from 'styled-components';

export const AppStyle = styled.div`
 margin: 0 auto;
`;

export const ProfileUser = styled.div`
 display: block;
  margin: 30px auto;
//  margin-top: 0;
//  margin-bottom: 30px;
//  margin-left: auto;
//  margin-right: auto;
 width: 300px;
 padding: 15px;
 background-color: white;
 flex-direction: columb;
 align-items: center;
 justify-content: center;
 box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
 display: block;
 text-align: center;
 margin: 0 auto;
 
`;
export const UserTag = styled.div`
font-size: 16px;
margin-bottom: 10px;
`;

export const Stats = styled.ul`
display: flex;
align-items: center;
 justify-content: space-between;

 width: 300px;
 padding: 0;
 margin: 0, 15px;
`;
export const StatsSpan = styled.li`
display: flex;
flex-direction: column;
font-size: 16px;
width: calc(100% / 3);
text-align: center;
gap: 5px;
`;

export const Label = styled.span`
font-size: 16px;
`;

export const Quantity = styled.span`
font-size: 20px;
font-weight: 700;
`;