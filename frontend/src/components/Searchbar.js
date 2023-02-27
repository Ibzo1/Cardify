import React from 'react'
import styled from 'styled-components'

const StyledSearchbar = styled.input`
width: 90%;
max-width: 600px;
background:rgba(125, 125, 125, 0.2);
display: flex;
align-items: center;
border-radius: 50px;
padding: 10px 20px;
background: transparent;
flex: 1;
border: 0;
outline: none;
padding: 24px 20px;
font-size: 20px;
font-weight: 470;
color: #FFFFFF;
width: 100%;
border: 0;
margin-right: 10px;
border-radius: 50;
background: #444;
cursor: pointer;
`;

export default function Searchbar(props) {
  return (
    <StyledSearchbar type="text" placeholder={props.placeholder} />
  )
}
