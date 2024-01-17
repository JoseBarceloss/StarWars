import React, { useEffect, useState } from 'react';
import fetchPlanets from '../API/Fetch';
import { Planets, FilterOPT, Planet, PlanetsProviderProps } from '../type/type';
import ContextPlanets from './PlanetContext';

function PlanetsProvider({ children } :PlanetsProviderProps) {
  const [originalPlanets, setOriginalPlanets] = useState<Planet[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [numericFilters, setNumericFilters] = useState<FilterOPT[]>([]);
  const [sortOrder, setSortOrder] = useState({ column: '', sort: '' });

  const moreNumericFilter = (filter: FilterOPT) => {
    setNumericFilters([...numericFilters, filter]);
  };

  const remNumericFilter = (filter: FilterOPT) => {
    const updatedFilters = numericFilters.filter((prevFilter) => {
      return (
        prevFilter.column !== filter.column
        || prevFilter.comparison !== filter.comparison
        || prevFilter.value !== filter.value
      );
    });
    setNumericFilters(updatedFilters);
  };

  useEffect(() => {
    const getPlanets = async () => {
      try {
        const data = await fetchPlanets();
        setPlanets(data);
        setOriginalPlanets(data);
      } catch (error) {
        console.error('Falha na requisição dos Planetas:', error);
      }
    };
    getPlanets();
  }, []);

  const handleClickFilter = (filPlanetsByName: Planet[]) => {
    if (numericFilters.length) {
      const filPlanetsByNumeric = filPlanetsByName.filter((planet) => {
        return numericFilters.every(({ comparison, column, value }) => {
          const planetValue = Number(planet[column]);
          const valueFilter = Number(value);

          if (comparison === 'maior que') {
            return planetValue > valueFilter;
          } if (comparison === 'menor que') {
            return planetValue < valueFilter;
          } if (comparison === 'igual a') {
            return planetValue === valueFilter;
          }

          return true;
        });
      });
      return filPlanetsByNumeric;
    }
    return filPlanetsByName;
  };

  const sortPlanets = (planetsSorted: Planets) => {
    const orderC = sortOrder.column;
    if (!orderC) return planetsSorted;
    return planets.sort((a, b) => {
      if (a[orderC] === 'unknown' && b[orderC] === 'unknown') {
        return 0;
      } if (b[orderC] === 'unknown') {
        return -1;
      } if (a[orderC] === 'unknown') {
        return 1;
      }
      return sortOrder.sort === 'ASC'
        ? Number(a[orderC]) - Number(b[orderC])
        : Number(b[orderC]) - Number(a[orderC]);
    });
  };

  const remAllNumericFilters = () => {
    setNumericFilters([]);
  };

  return (
    <ContextPlanets.Provider
      value={ {
        planets,
        setPlanets,
        searchValue,
        setSearchValue,
        originalPlanets,
        handleClickFilter,
        numericFilters,
        moreNumericFilter,
        remAllNumericFilters,
        remNumericFilter,
        sortPlanets,
        setSortOrder,
      } }
    >
      {children}
    </ContextPlanets.Provider>
  );
}

export default PlanetsProvider;
