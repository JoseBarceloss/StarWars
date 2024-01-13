import { useContext, useState } from 'react';
import ContextPlanets from '../context/PlanetContext';

function FilterBar() {

  const { setPlanets, originalPlanets } = useContext(ContextPlanets);

  const [choicedColumn, setChoicedColumn] = useState('population');
  const [choicedComparison, setChoicedComparison] = useState('maior que');
  const [filterNumber, setFilterNumber] = useState<string>('0');

  const numericFilter = () => {
    const filterValue = parseFloat(filterNumber);

    const filteredPlanets = originalPlanets.filter((planet) => {
      const planetValue = parseFloat(planet[choicedColumn]);

      switch (choicedComparison) {
        case 'maior que':
          return planetValue > filterValue;
        case 'menor que':
          return planetValue < filterValue;
        case 'igual a':
          return planetValue === filterValue;
        default:
          return false;
      }
    });

    setPlanets(filteredPlanets);
  };

  return (
    <>

      <label htmlFor="column">Coluna:</label>
      <select
        data-testid="column-filter"
        id="column"
        value={choicedColumn}
        onChange={(e) => setChoicedColumn(e.target.value)}
      >

        {['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'].map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>

      <label htmlFor="operator">Operador:</label>
      <select
        data-testid="comparison-filter"
        id="operator"
        value={choicedComparison}
        onChange={(e) => setChoicedComparison(e.target.value)}
      >

        {['maior que', 'menor que', 'igual a'].map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>

      <input
        data-testid="value-filter"
        type="number"
        value={filterNumber}
        onChange={(e) => setFilterNumber(e.target.value)}
      />

      <button data-testid="button-filter" onClick={numericFilter}>
        Filtrar
      </button>
    </>
  );
}

export default FilterBar;