import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterValues, setFilterValues] = useState([]);

  useEffect(() => {
    fetchPlanets().then((results) => {
      results.forEach((objPlanet) => delete objPlanet.residents);
      setData(results);
    });
  }, []);

  const context = {
    data,
    filterByName: {
      setFilterName,
      name: filterName,
    },
    filterByNumericValues: {
      setFilterValues,
      filterValues,
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
