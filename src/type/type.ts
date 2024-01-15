import React from 'react';

export type Planet = {
  [key: string]: any
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type Planets = Planet[];

export type FilterOPT = {
  value: string;
  column: string,
  comparison: string,
};

export type PlanetsProviderProps = {
  children: React.ReactNode,
};
