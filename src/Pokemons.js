import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

class Pokemons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  getApiUrl() {
    return "http://localhost:3000/api/v1"
  }
 
  fetchPokemons() {
    const endpoint = this.getApiUrl() + "/pokemon"; 
    fetch(endpoint)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({pokemons: resp});
      }
    );
  }

  componentDidMount() {
    this.fetchPokemons()
  }
 
  render() {
    
    const { pokemons } = this.state;
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
        data={ this.state.pokemons }
        pagination={ paginationFactory() }
        rowEvents={ rowEvents }
      />
    );
  }
}

export default Pokemons;
