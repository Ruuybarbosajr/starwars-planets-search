import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import useSelectors from '../hooks/useSelectors';

export default function Filters() {
  const { filterByNumericValues: { setFilterValues } } = useContext(Context);

  const [arrColumns, arrValues] = useSelectors();
  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValueFilter] = useState(0);

  function handleClick(columnSelector, comparisonSelector, valueSelector) {
    setFilterValues((prevState) => (
      [...prevState, {
        column: columnSelector, comparison: comparisonSelector, value: valueSelector }]));
    setColumnFilter(arrColumns[1] || 'population');
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        {arrColumns.map((columnFilter) => (
          <option
            key={ columnFilter }
            value={ columnFilter }
          >
            { columnFilter }
          </option>
        ))}
      </select>
      <select
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {arrValues.map((valueFilter) => (
          <option
            key={ valueFilter }
            value={ valueFilter }
          >
            { valueFilter }
          </option>
        ))}
      </select>
      <input
        value={ value }
        onChange={ ({ target }) => setValueFilter(target.value) }
        data-testid="value-filter"
        type="number"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(column, comparison, value) }
      >
        Filtrar
      </button>
    </div>
  );
}
