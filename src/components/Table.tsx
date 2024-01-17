import React, { useContext } from 'react';
import ContextPlanets from '../context/PlanetContext';
import FilterBar from '../filters/FilterBar';
import FilterText from '../filters/FilterText';
import OrdPlanet from './OrdPlanet';

function Table() {
  const tableColumns = [
    'Name',
    'Rotation Period',
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

  const filteredPlanetsByName = originalPlanets.filter((planet) => {
    const planetName = planet.name.toLowerCase();
    const filteredText = searchValue.toLowerCase();
    return planetName.includes(filteredText);
  });

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
            <tr>
              {tableColumns.map((column) => (
                <th key={ column }>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedPlanets.map((planet) => (
              <tr key={ planet.name }>
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
                  <a href={ planet.url } target="_blank" rel="noopener noreferrer">
                    {planet.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
