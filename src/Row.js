import React, { Component } from 'react';

class Row extends Component {
  render() {
    const {pokemon} = this.props;
    return (
        <tr>
          <td>{ pokemon.id }</td>
          <td>{ pokemon.identifier }</td>
        </tr>
    );
  }
}

export default Row;
