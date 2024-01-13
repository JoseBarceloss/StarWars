import { createContext } from 'react';
import { Planet } from '../type/type';

type PlanetsContextType = {
  planets: Planet[];
  setPlanets: (newPlanets: Planet[]) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
  originalPlanets: Planet[];
  handleClickFilter: (filterTerm: string) => void;
};

const PlanetsContext = createContext<PlanetsContextType>({
  planets: [],
  setPlanets: () => {},
  searchValue: '',
  setSearchValue: () => {},
  originalPlanets: [],
  handleClickFilter: () => {},
});

export default PlanetsContext;