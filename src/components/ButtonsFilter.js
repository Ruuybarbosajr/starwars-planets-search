import React, { useContext } from 'react';
import Context from '../context/Context';

export default function ButtonsFilter() {
  const { filterByNumericValues:
    { filterValues, setFilterValues } } = useContext(Context);

  function handleClick(columnButton) {
    setFilterValues((prevState) => (
      [...prevState.filter(({ column }) => column !== columnButton)]));
  }

  return (
    <div>
      { filterValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button
            onClick={ () => handleClick(filter.column) }
            type="button"
          >
            x
          </button>
        </div>
      )) }
      <button
        onClick={ () => setFilterValues([]) }
        type="button"
        data-testid="button-remove-filters"
      >
        Remover todas filtragens
      </button>
    </div>
  );
}
