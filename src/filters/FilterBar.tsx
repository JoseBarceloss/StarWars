import { useEffect, useContext, useState } from 'react';
import { FilterOPT } from '../type/type';
import ContextPlanets from '../context/PlanetContext';

const columnsSelect = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function FilterBar() {
  const {
    numericFilters,
    moreNumericFilter,
    remAllNumericFilters,
    remNumericFilter,
  } = useContext(ContextPlanets);

  const [choicedColumn, setChoicedColumn] = useState('population');
  const [choicedComparison, setChoicedComparison] = useState('maior que');
  const [filterNumber, setFilterNumber] = useState('0');

  // Função addFilter
  const addFilter = () => {
    const newFilter = {
      column: choicedColumn,
      comparison: choicedComparison,
      value: filterNumber,
    };
    moreNumericFilter(newFilter);
  };

  const removeFilter = (filter: FilterOPT) => {
    remNumericFilter(filter);
  };

  useEffect(() => {
    const colFilters = columnsSelect
      .filter((column) => !numericFilters.some((filter) => filter.column === column));
    setChoicedColumn(colFilters[0]);
    setChoicedComparison('maior que');
    setFilterNumber('0');
  }, [numericFilters]);

  return (
    <>
      <label htmlFor="column"> Coluna: </label>
      <select
        data-testid="column-filter"
        name="Coluna"
        id="column"
        value={ choicedColumn }
        onChange={ (e) => setChoicedColumn(e.target.value) }
      >
        {columnsSelect
          .filter((column) => !numericFilters.some((filter) => filter.column === column))
          .map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
      </select>

      <label htmlFor="operator"> Operador: </label>
      <select
        data-testid="comparison-filter"
        name="Operador"
        id="operator"
        value={ choicedComparison }
        onChange={ (e) => setChoicedComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ filterNumber }
        onChange={ (e) => setFilterNumber(e.target.value) }
      />
      <button
        data-testid="button-filter"
        onClick={ addFilter }
      >
        Filtrar
      </button>
      {numericFilters.map((filter, index) => (
        <div
          data-testid="filter"
          key={ index }
        >
          {filter.column}
          {' '}
          {filter.comparison}
          {' '}
          {filter.value}
          <button onClick={ () => removeFilter(filter) }>
            Remover
          </button>
        </div>
      ))}
      <button
        onClick={ remAllNumericFilters }
        data-testid="button-remove-filters"
      >
        Remover Filtros
      </button>
    </>
  );
}
export default FilterBar;
