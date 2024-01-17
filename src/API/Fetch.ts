const fetchPlanets = async () => {
  try {
    const API = 'https://swapi.dev/api/planets';
    const response = await fetch(API);
    const data = await response.json();
    const results = await data.results;
    return results;
  } catch (error) {
    console.error('Erro no buscar a API', error);
  }
};

export default fetchPlanets;
