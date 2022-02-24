import React, { useContext } from 'react';
import Context from '../context/Context';

export default function Table() {
  const { data } = useContext(Context);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((objPlanets) => (
          <tr key={ objPlanets.name }>
            <td>{objPlanets.name}</td>
            <td>{objPlanets.rotation_period}</td>
            <td>{objPlanets.orbital_period}</td>
            <td>{objPlanets.diameter}</td>
            <td>{objPlanets.climate}</td>
            <td>{objPlanets.gravity}</td>
            <td>{objPlanets.terrain}</td>
            <td>{objPlanets.surface_water}</td>
            <td>{objPlanets.population}</td>
            <td>{objPlanets.films}</td>
            <td>{objPlanets.created}</td>
            <td>{objPlanets.edited}</td>
            <td>{objPlanets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
