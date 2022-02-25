import React from 'react';
import './App.css';
import Filters from './components/Filters';
import InputSearch from './components/InputSearch';
import Table from './components/Table';
import Provider from './context/Provider';
import ButtonsFilter from './components/ButtonsFilter';

function App() {
  return (
    <Provider>
      <InputSearch />
      <Filters />
      <ButtonsFilter />
      <Table />
    </Provider>
  );
}

export default App;
