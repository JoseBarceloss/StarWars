import React, { useContext, ChangeEvent } from 'react';
import ContextPlanets from '../context/PlanetContext';
import FilterBar from '../filters/FilterBar'
import FilterText from '../filters/FilterText';

function Table() {
  const {
    planets,
    setSearchValue,
    searchValue,
    handleClickFilter,
  } = useContext(ContextPlanets);

  const columnsInfos = [
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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    handleClickFilter(value);
  };

  return (
    <>
      <FilterBar />
      <FilterText value={searchValue} onChange={handleSearchChange} />
      <div>
        <table>
          <thead>
            <tr>
              {columnsInfos.map((info, index) => (
                <th key={index}>{info}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planets.map((planet) => (
              <tr key={planet.name}>
                <td>{planet.name}</td>
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
                <td>{planet.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;