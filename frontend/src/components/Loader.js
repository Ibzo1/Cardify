import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={500} width={250} />
);
 
export default Example;