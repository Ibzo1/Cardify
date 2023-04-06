import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    align-items: center;
    direction: ltr;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    margin: 0;
    line-height: 16px;
    vertical-align: middle;
    box-shadow: none;
    background: rgba(0, 0, 0, .04);
    border: none;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 1);
    font-family: Calibre, Helvetica Neue, Segoe UI, Helvetica, Arial, Lucida Grande, sans-serif;
    font-size: 19px;
    padding: 8px 16px;
    margin-top: 25vh;
    width: 40%;
    margin-bottom: 0px;
    height: 55px;
    border-radius: 36px;
    margin-right: 10px;
    display: flex;
`;

export default function Input(props) {
  return (
    <StyledInput {...props}/>
  )
}
