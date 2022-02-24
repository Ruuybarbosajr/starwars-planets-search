import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function Filters() {
  const { filterByNumericValues: { setFilterValues } } = useContext(Context);
  const [column, setColumnFilter] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValueFilter] = useState(0);

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

  return (
    <div>
      <select
        value={ column }
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
        onClick={ () => setFilterValues((prevState) => (
          [...prevState, { column, comparison, value }])) }
      >
        Filtrar
      </button>
    </div>
  );
}
