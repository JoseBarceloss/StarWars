import React, { useContext, useState, ChangeEvent } from 'react';
import ContextPlanets from '../context/PlanetContext';

const columnsSelect = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

interface SortType {
  column: string;
  sort: 'ASC' | 'DESC';
}

function OrdPlanet() {
  const { setSortOrder } = useContext(ContextPlanets);
  const [sortType, setSortType] = useState<SortType>({
    column: 'population',
    sort: 'ASC',
  });

  const updateSortType = (updatedField: Partial<SortType>) => {
    setSortType((prevSortType) => ({ ...prevSortType, ...updatedField }));
  };

  const handleColumnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateSortType({ column: event.target.value });
  };

  const handleSortChange = (sort: 'ASC' | 'DESC') => {
    updateSortType({ sort });
  };

  return (
    <div>
      <div>
        <label htmlFor="column-sort">Ordenar por</label>
        <select
          name="column-sort"
          data-testid="column-sort"
          value={ sortType.column }
          onChange={ handleColumnChange }
        >
          {columnsSelect.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sort-asc">Ascendente</label>
        <input
          type="radio"
          name="sort-type"
          value="ASC"
          id="sort-asc"
          data-testid="column-sort-input-asc"
          onChange={ () => handleSortChange('ASC') }
          checked={ sortType.sort === 'ASC' }
        />
      </div>
      <div>
        <label htmlFor="sort-desc">Descendente</label>
        <input
          type="radio"
          name="sort-type"
          value="DESC"
          id="sort-desc"
          data-testid="column-sort-input-desc"
          onChange={ () => handleSortChange('DESC') }
          checked={ sortType.sort === 'DESC' }
        />
      </div>

      <button
        data-testid="column-sort-button"
        onClick={ () => setSortOrder(sortType) }
      >
        Ordenar
      </button>
    </div>
  );
}

export default OrdPlanet;
