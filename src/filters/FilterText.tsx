import React, { useContext, ChangeEvent, ReactElement } from 'react';
import ContextPlanets from '../context/PlanetContext';

function FilterText(): ReactElement {
  const { searchValue, setSearchValue } = useContext(ContextPlanets);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        data-testid="name-filter"
        id="search"
        type="text"
        value={ searchValue }
        onChange={ handleInputChange }
        placeholder="Search planets..."
        aria-label="Search planets"
      />
    </div>
  );
}

export default FilterText;
