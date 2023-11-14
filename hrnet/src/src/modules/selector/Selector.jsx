import React, { useState } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 5px 0;

`;

function Selector({ name, id, options, onChange }){
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
        onChange(e);
        }
    };

    return (
        <StyledSelect name={name} id={id} value={value} onChange={handleChange}>
        {options.map((option, index) => (
            <option key={index} value={option}>
            {option}
            </option>
        ))}
        </StyledSelect>
    );
    };

export default Selector;
