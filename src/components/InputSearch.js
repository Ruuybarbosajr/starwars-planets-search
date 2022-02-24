import React, { useContext } from 'react';
import Context from '../context/Context';

export default function InputSearch() {
  const { filterByName: { setFilterName, name } } = useContext(Context);
  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      placeholder="Nome do Planeta"
      onChange={ ({ target }) => setFilterName(target.value) }
    />
  );
}
