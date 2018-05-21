import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


class Table extends Component {
  
 
  render() {
    const { pokemons } = this.props;
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
	console.info(e);
        console.info(row);
        console.info(rowIndex);
      }
    };
    const columns = [
      {
        dataField: 'id',
        text: 'Id',
        sort: true,
        isKey: true
      },
      {
        dataField: 'identifier',
        text: 'Name',
        sort: true
      },
      {
        dataField: 'height',
        text: 'Height',
        sort: true
      },
      {
        dataField: 'weight',
        text: 'Weight',
        sort: true
      },
      {
        dataField: 'base_experience',
        text: 'Base Experience',
        sort: true
      }
    ];

    return (
      <BootstrapTable
        keyField='id'
        columns={ columns }
        data={ pokemons }
        pagination={ paginationFactory() }
        rowEvents={ rowEvents }
      />
    );
  }
}

export default Table;
