import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchPlanets from '../services';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPlanets().then((results) => {
      results.forEach((objPlanet) => delete objPlanet.residents);
      setData(results);
    });
  }, []);

  return (
    <Context.Provider value={ { data } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
