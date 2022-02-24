async function fetchPlanets() {
  const { results } = await (await fetch('https://swapi-trybe.herokuapp.com/api/planets/')).json();
  return results;
}

export default fetchPlanets;
