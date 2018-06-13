import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

class PokemonsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  getApiUrl() {
    return "http://localhost:3000/api/v1";
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

  pokemonImage(row, pokemon) {
    const publicId = "pokemon/" + pokemon.identifier;
    return (
      <CloudinaryContext cloudName="dvqmajsuw">
        <Image publicId={ publicId }>
          <Transformation width="100" crop="scale"/>
        </Image>
      </CloudinaryContext>
    );
  }
  
  componentDidMount() {
    this.fetchPokemons()
  }
 
  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        e.preventDefault()
	window.location.href = "/pokemons/" + row.id;
      }
    };
    const columns = [
      {
        dataField: 'image',
        text: 'Image',
        formatter: this.pokemonImage
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

export default PokemonsList;
