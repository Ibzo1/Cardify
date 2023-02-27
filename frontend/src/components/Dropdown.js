import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButton(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
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