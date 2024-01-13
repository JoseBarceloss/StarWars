import { Planets } from '../type/type';

const comparePopulation = (a: string, b: string): number => {
  if (a === 'unknown' && b === 'unknown') return 0;
  if (b === 'unknown') return -1;
  if (a === 'unknown') return 1;
  return parseInt(a, 10) - parseInt(b, 10);
};

export const sortByOrbital = (planets: Planets) => {
  return [...planets].sort((a, b) => parseFloat(a.orbital_period) - parseFloat(b.orbital_period));
};

export const sortByDiameter = (planets: Planets) => {
  return [...planets].sort((a, b) => parseFloat(a.diameter) - parseFloat(b.diameter));
};

export const sortByPopulation = (planets: Planets) => {
  return [...planets].sort((a, b) => comparePopulation(a.population, b.population));
};

export const sortPlanets = (planets: Planets) => {
  return [...planets].sort((a, b) => comparePopulation(a.population, b.population));
};
