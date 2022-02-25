import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterValues, setFilterValues] = useState([]);
  const [order, setOrder] = useState({
    column: '',
    sort: '',
  });
  const [showOrder, setShowOrder] = useState(false);

  useEffect(() => {
    fetchPlanets().then((results) => {
      results.forEach((objPlanet) => delete objPlanet.residents);
      results.sort((planetA, planetB) => planetA.name.localeCompare(planetB.name));
      setData(results);
    });
  }, []);

  const objectFilters = {
    arrColumns: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],

    arrValues: [
      'maior que',
      'menor que',
      'igual a',
    ],
  };

  const context = {
    data,
    objectFilters,
    filterByName: {
      setFilterName,
      name: filterName,
    },
    filterByNumericValues: {
      setFilterValues,
      filterValues,
    },
    order: {
      order,
      setOrder,
      showOrder,
      setShowOrder,
    },
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Provider;
