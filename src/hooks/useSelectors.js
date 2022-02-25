import { useContext } from 'react';
import Context from '../context/Context';

export default function useSelectors() {
  const {
    filterByNumericValues: {
      filterValues }, objectFilters: { arrColumns, arrValues } } = useContext(Context);

  if (filterValues.length === 0) return [arrColumns, arrValues];

  return [[...arrColumns.filter((columnSelector) => (
    filterValues.every(({ column }) => columnSelector !== column)))], arrValues];
}
