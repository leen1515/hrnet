import { useState } from 'react';
import styled from 'styled-components';
import { Label } from '../../styled/global';

const StyledSelect = styled.select`
  padding: 2px;
  width: 200px;
  border: 1px solid #ccc;
  font-size: 1em;
  margin: 5px 0;
  outline: 1px solid black;
  &&:focus {
    outline: 2px solid black;}
`;

function Selector({ label, name, id, options, onChange }) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        if (onChange) {
            onChange(e);
        }
    };

    const renderOption = (option, index) => {
        if (typeof option === 'string') {
            return <option key={index} value={option}>{option}</option>;
        } else if (typeof option === 'object' && option !== null) {
            return <option key={index} value={option.abbreviation}>{option.name}</option>;
        }
    };

    return (<>
        {label && <Label htmlFor={id}>{label}</Label>}
        <StyledSelect name={name} id={id} value={value} onChange={handleChange}>
            {options.map(renderOption)}
        </StyledSelect>
    </>
    );
}

export default Selector;
