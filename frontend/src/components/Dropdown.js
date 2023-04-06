import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


function DropdownButton(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{
        marginTop: '10vh',
        marginLeft:'-15vh',
        width: '70px',
        height: '45px',
        marginRight: '20px',
        backgroundColor:'#825da3'
        }}>
        {props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.options.map(option => {
          return (
            <Dropdown.Item onClick={() => props.onSelect(option)} href={option.href}>{option.label}</Dropdown.Item>
          )
        })}
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;