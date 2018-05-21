import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

class Table extends Component {
  render() {
    const { pokemons } = this.props;
    const columns = [
      {
        dataField: 'id',
        text: 'Id'
      },
      {
        dataField: 'identifier',
        text: 'Name'
      },
      {
        dataField: 'height',
        text: 'Height'
      },
      {
        dataField: 'weight',
        text: 'Weight'
      },
      {
        dataField: 'base_experience',
        text: 'Base Experience'
      }
    ];

    return (
      <BootstrapTable keyField='id' columns={ columns } data={ pokemons } />
    );
  }
}

export default Table;
