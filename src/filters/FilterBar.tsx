import React, { useEffect, useContext, useState } from 'react';
import { FilterOPT } from '../type/type';
import ContextPlanets from '../context/PlanetContext';

const columnsSelect = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const FilterBar: React.FC = () => {
  const {
    numericFilters,
    moreNumericFilter,
    remAllNumericFilters,
    remNumericFilter,
  } = useContext(ContextPlanets);

  const [selectedColumn, setSelectedColumn] = useState<string>('population');
  const [selectedComparison, setSelectedComparison] = useState<string>('maior que');
  const [filterValue, setFilterValue] = useState<string>('0');

  const handleAddFilter = () => {
    const newFilter: FilterOPT = {
      column: selectedColumn,
      comparison: selectedComparison,
      value: filterValue,
    };
    moreNumericFilter(newFilter);
  };

  const handleRemoveFilter = (filter: FilterOPT) => {
    remNumericFilter(filter);
  };

  const renderFilterOptions = () =>
    columnsSelect
      .filter((column) => !numericFilters.some((filter) => filter.column === column))
      .map((column) => (
        <option key={column} value={column}>
          {column}
        </option>
      ));

  useEffect(() => {
    setSelectedColumn(columnsSelect[0]);
    setSelectedComparison('maior que');
    setFilterValue('0');
  }, [numericFilters]);

  return (
    <>
      <label htmlFor="column">Coluna:</label>
      <select
        data-testid="column-filter"
        id="column"
        value={selectedColumn}
        onChange={(e) => setSelectedColumn(e.target.value)}
      >
        {renderFilterOptions()}
      </select>

      <label htmlFor="operator">Operador:</label>
      <select
        data-testid="comparison-filter"
        id="operator"
        value={selectedComparison}
        onChange={(e) => setSelectedComparison(e.target.value)}
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />

      <button data-testid="button-filter" onClick={handleAddFilter}>
        Filtrar
      </button>

      {numericFilters.map((filter, index) => (
        <div key={index} data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button onClick={() => handleRemoveFilter(filter)}>Remover</button>
        </div>
      ))}

      <button data-testid="button-remove-filters" onClick={remAllNumericFilters}>
        Remover Filtros
      </button>
    </>
  );
};

export default FilterBar;
