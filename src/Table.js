import React, { Component } from 'react';
import Row from './Row.js';

class Table extends Component {
  render() {
    const {pokemons} = this.props;
    
    return (
      <table>
        <th>
          <td>Id</td>
          <td>Name</td>
        </th>
        {pokemons.map((pokemon) => (
           <Row pokemon={pokemon} /> 
        ))}
      </table> 
    );
  }
}

export default Table;
