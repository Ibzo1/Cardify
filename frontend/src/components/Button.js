import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  direction: ltr;
  word-wrap: break-word;
  margin: 0;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  box-sizing: content-box;
  -webkit-font-smoothing: antialiased;
  justify-content: center;
  position: relative;
  text-align: center;
  text-shadow: none;
  vertical-align: middle;
  transition: 200ms cubic-bezier(.08, .52, .52, 1) background-color, 200ms cubic-bezier(.08, .52, .52, 1) box-shadow, 200ms cubic-bezier(.08, .52, .52, 1) transform;
  background-image: none;
  border: 1px solid #0084ff;
  color: #fff;
  display: block;
  font-family: Calibre, Helvetica Neue, Segoe UI, Helvetica, Arial, Lucida Grande, sans-serif;
  font-size: 19px;
  height: 40px;
  padding: 2px 20px 0;
  width: auto;
  background-color: #825da3;
  border-color: #825da3;
  line-height: 17px;
  font-weight: 600;
  margin-bottom: 0px;
  border-radius: 36px;
`;

export default function Button(props) {
  return (
    <StyledButton {...props}/>
  )
}
