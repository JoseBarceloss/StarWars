import React, { useContext } from 'react';
import ContextPlanets from '../context/PlanetContext';
import FilterBar from '../filters/FilterBar';
import FilterText from '../filters/FilterText';
import OrdPlanet from './OrdPlanet';

const TableHeader: React.FC<{ columns: string[] }> = ({ columns }) => (
  <tr>
    {columns.map((column) => (
      <th key={column}>{column}</th>
    ))}
  </tr>
);

const TableRow: React.FC<{ planet: any }> = ({ planet }) => (
  <tr key={planet.name}>
    <td data-testid="planet-name">{planet.name}</td>
    <td>{planet.rotation_period}</td>
    <td>{planet.orbital_period}</td>
    <td>{planet.diameter}</td>
    <td>{planet.climate}</td>
    <td>{planet.gravity}</td>
    <td>{planet.terrain}</td>
    <td>{planet.surface_water}</td>
    <td>{planet.population}</td>
    <td>{planet.films}</td>
    <td>{planet.created}</td>
    <td>{planet.edited}</td>
    <td>
      <a href={planet.url} target="_blank" rel="noopener noreferrer">
        {planet.url}
      </a>
    </td>
  </tr>
);

const Table: React.FC = () => {
  const columnsInfos = [
    'Name',
    'Rotarion Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  const {
    originalPlanets,
    searchValue,
    handleClickFilter,
    sortPlanets,
  } = useContext(ContextPlanets);

  const filteredPlanetsByName = originalPlanets.filter((planet) =>
    planet.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredPlanetsByNumbers = handleClickFilter(filteredPlanetsByName);
  const sortedPlanets = sortPlanets(filteredPlanetsByNumbers);

  return (
    <div>
      <div className="filter-bar">
        <FilterBar />
        <FilterText />
        <OrdPlanet />
      </div>
      <div>
        <table className="data-table">
          <thead>
            <TableHeader columns={columnsInfos} />
          </thead>
          <tbody>
            {sortedPlanets.map((planet) => (
              <TableRow key={planet.name} planet={planet} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
