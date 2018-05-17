import React, { Component } from 'react';
import  { NavLink } from 'react-router-dom';

class Row extends Component {
  render() {
    const {pokemon} = this.props;
    return (
        <tr>
          <td>{ pokemon.id }</td>
          <td><NavLink to='/'>{ pokemon.identifier }</NavLink></td>
          <td>{ pokemon.height }</td>
          <td>{ pokemon.weight }</td>
          <td>{ pokemon.base_experience }</td>
        </tr>
    );
  }
}

export default Row;
