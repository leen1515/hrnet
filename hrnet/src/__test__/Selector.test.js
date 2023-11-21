import React from 'react';
import { render, screen } from '@testing-library/react';
import Selector from '../modules/selector/Selector';
import { statesArray } from '../modules/selector/datasArrays/statesArray';

describe('Selector Component', () => {
  test('it should display the correct options for states', () => {
    render(
      <Selector
        name="state"
        id="state"
        options={statesArray}
        onChange={() => {}}
      />
    );

    statesArray.forEach(state => {
      expect(screen.getByText(state.name)).toBeInTheDocument();
    });
  });
});
