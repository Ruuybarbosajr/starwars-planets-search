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

  if (!filterValues.length) return [arrColumns, arrValues];
  return [[...arrColumns.filter((columnSelector) => (
    filterValues.some(({ column }) => columnSelector !== column)))], arrValues];
}
