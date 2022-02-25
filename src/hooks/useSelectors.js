import { useContext } from 'react';
import Context from '../context/Context';

export default function useSelectors() {
  const { filterByNumericValues: { filterValues } } = useContext(Context);

  const arrColumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const arrValues = [
    'maior que',
    'menor que',
    'igual a',
  ];

  if (filterValues.length === 0) return [arrColumns, arrValues];

  return [[...arrColumns.filter((columnSelector) => (
    filterValues.every(({ column }) => columnSelector !== column)))], arrValues];
}
