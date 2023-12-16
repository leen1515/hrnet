import React, { useMemo } from 'react';
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
    outline: 2px solid black;
  }
`;

const renderOption = (option, index) => {
    if (typeof option === 'string') {
        return <option key={index} value={option}>{option}</option>;
    } else if (typeof option === 'object' && option !== null) {
        return <option key={index} value={option.abbreviation}>{option.name}</option>;
    }
};

const Selector = React.memo(({ label, name, id, options, onChange }) => {
    const memoizedOptions = useMemo(() => options.map(renderOption), [options]);

    return (
        <>
            {label && <Label htmlFor={id}>{label}</Label>}
            <StyledSelect name={name} id={id} onChange={onChange}>
                {memoizedOptions}
            </StyledSelect>
        </>
    );
});

export default Selector;
