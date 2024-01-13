import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlanetsProvider from '../context/PlanetsProvider';
import FilterBar from '../filters/FilterBar';
import FilterText from '../filters/FilterText';

test('Verifica se os filtros numéricos estão funcionando', async () => {
    render(
      <PlanetsProvider>
        <FilterBar />
        <FilterText />
      </PlanetsProvider>
    );
  
    const columnInput = screen.getByTestId('column-filter');
    await userEvent.selectOptions(columnInput, 'orbital_period');
  
    const comparisonInput = screen.getByTestId('comparison-filter');
    await userEvent.selectOptions(comparisonInput, 'maior que');
  
    const numericInput = screen.getByTestId('value-filter');
    await userEvent.type(numericInput, '1');
  
    const filterButton = screen.getByTestId('button-filter');
    userEvent.click(filterButton);
  
    const textInput = screen.getByTestId('name-filter');
    await userEvent.type(textInput, 'Tatooine');
  
  });