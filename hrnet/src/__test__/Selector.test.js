import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Selector from '../modules/selector/Selector';
import { statesArray } from '../modules/selector/datasArrays/statesArray';

describe('Selector Component', () => {
  test('it should display the correct options for states and handle state changes', () => {
    render(
      <Selector
        label="State"
        name="state"
        id="state"
        options={statesArray}
        onChange={() => {}}
      />
    );
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    for (let i = 0; i < 3; i++) {
      expect(screen.getByRole('option', { name: statesArray[i].name })).toBeInTheDocument();
    }
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: statesArray[1].abbreviation } });
    expect(selectElement.value).toBe(statesArray[1].abbreviation);
  });
});
