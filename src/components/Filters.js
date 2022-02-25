import React, { useContext, useState } from 'react';
import Context from '../context/Context';
import useSelectors from '../hooks/useSelectors';

export default function Filters() {
  const {
    filterByNumericValues: {
      setFilterValues }, objectFilters, order: {
      setOrder, setShowOrder } } = useContext(Context);

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

  function handleChangeOrder({ target }) {
    setOrder((prevState) => ({ ...prevState, [target.name]: target.value }));
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
      <label htmlFor="value-filter">
        <input
          id="value-filter"
          value={ value }
          onChange={ ({ target }) => setValueFilter(target.value) }
          data-testid="value-filter"
          type="number"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(column, comparison, value) }
      >
        Filtrar
      </button>
      <select
        name="column"
        data-testid="column-sort"
        onChange={ handleChangeOrder }
      >
        {objectFilters.arrColumns.map((columnSort) => (
          <option
            key={ columnSort }
            value={ columnSort }
          >
            { columnSort }
          </option>
        ))}
      </select>
      <label htmlFor="column-sort-input-asc">
        <input
          id="column-sort-input-asc"
          type="radio"
          name="sort"
          value="ASC"
          data-testid="column-sort-input-asc"
          onChange={ handleChangeOrder }
        />
        Acendente
      </label>
      <label htmlFor="column-sort-input-desc">
        <input
          name="sort"
          value="DESC"
          id="column-sort-input-desc"
          type="radio"
          data-testid="column-sort-input-desc"
          onChange={ handleChangeOrder }
        />
        Descendente
      </label>
      <button
        onClick={ () => setShowOrder((prevState) => !prevState) }
        data-testid="column-sort-button"
        type="button"
      >
        Ordenar
      </button>
    </div>
  );
}
