import React, { Component } from 'react';
import Row from './Row.js';

class Table extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Base Experience</th>
          </tr>
          {pokemons.map((pokemon) => (
             <Row key={pokemon.id} pokemon={pokemon} /> 
          ))}
        </tbody>
      </table> 
    );
  }
}

export default Table;
