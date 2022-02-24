import { useContext } from 'react';
import Context from '../context/Context';

export default function useFilterValue() {
  const { data, filterByNumericValues: { filterValues } } = useContext(Context);
  const objectFunctions = {
    'maior que': (fistValue, secondValue) => Number(fistValue) > Number(secondValue),
    'menor que': (fistValue, secondValue) => Number(fistValue) < Number(secondValue),
    'igual a': (fistValue, secondValue) => Number(fistValue) === Number(secondValue),
  };
  if (filterValues.length) {
    return data.filter((planet) => (
      filterValues.every((filter) => (
        objectFunctions[filter.comparison](planet[filter.column], filter.value)))));
  }
  return data;
}
