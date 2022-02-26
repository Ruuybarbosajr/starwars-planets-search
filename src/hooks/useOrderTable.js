import { useContext } from 'react';
import Context from '../context/Context';

export default function useOrderTable(arrFilter) {
  const { order: { order } } = useContext(Context);

  if (order.column) {
    const arrUnknown = arrFilter.filter((planet) => planet[order.column] === 'unknown');
    const arrNotUnknown = arrFilter.filter(
      (planet) => planet[order.column] !== 'unknown',
    );
    const objectFunction = {
      ASC: (column) => arrNotUnknown.sort(
        (planetA, planetB) => planetA[column] - planetB[column],
      ),
      DESC: (column) => arrNotUnknown.sort(
        (planetA, planetB) => planetB[column] - planetA[column],
      ),
    };
    return [...objectFunction[order.sort](order.column), ...arrUnknown];
  }
  return arrFilter;
}
