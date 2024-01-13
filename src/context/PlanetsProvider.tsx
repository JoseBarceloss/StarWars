import React, { useEffect, useState } from 'react';
import fetchPlanets from '../API/Fetch';
import { Planet, PlanetsProviderProps } from '../type/type';
import ContextPlanets from './PlanetContext';

function PlanetsProvider({ children } :PlanetsProviderProps) {
  const [originalPlanets, setOriginalPlanets] = useState<Planet[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchValue, setSearchValue] = useState('');

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

  const handleClickFilter = (term: string) => {
    const filteredPlanets = originalPlanets.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      const searchText = term.toLowerCase();
      return planetName.includes(searchText);
    });
    setPlanets(filteredPlanets);
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
      } }
    >
      {children}
    </ContextPlanets.Provider>
  );
}

export default PlanetsProvider;