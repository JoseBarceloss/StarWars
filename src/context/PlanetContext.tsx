import { createContext } from 'react';
import { Planets, FilterOPT, Planet } from '../type/type';

type PlanetsContext = {
  planets: Planet[];
  setPlanets: (planets: Planet[]) => void,
  searchValue: string,
  setSearchValue: (term: string) => void,
  originalPlanets: Planet[],
  handleClickFilter: (filteredPlanetsByName: Planet[]) => Planet[],
  numericFilters: FilterOPT[],
  moreNumericFilter: (filter: FilterOPT) => void,
  remAllNumericFilters: () => void,
  remNumericFilter: (filter: FilterOPT) => void,
  sortPlanets: (planetsSorted: Planets) => Planet[]
  setSortOrder: (sortOrder: { column: string, sort: string }) => void,
};

const ContextPlanets = createContext({} as PlanetsContext);

export default ContextPlanets;
