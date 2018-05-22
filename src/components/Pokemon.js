import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {

  constructor(props) {
    super(props);
    console.info(props);
    this.state = {
      pokemon: [],
      id: props.match.params.id 
    };
  }

  getApiUrl() {
    return "http://localhost:3000/api/v1"
  }
 
  fetchPokemon() {
    const endpoint = this.getApiUrl() + "/pokemon/" + this.state.id; 
    fetch(endpoint)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({pokemon: resp});
      }
    );
  }

  componentDidMount() {
    this.fetchPokemon()
  }
 
  render() {
    const { pokemon } = this.state; 
    console.info (pokemon);
    return (
      <div>
        <h1>{ pokemon.identifier }</h1>
        <p><b>Base Experience:</b> { pokemon.base_experience }</p>
        <p><b>Height:</b> { pokemon.height }</p>
        <p><b>Weight:</b> { pokemon.weight }</p>
        <Link to='/pokemons'>Back</Link>
      </div>
    );
  }
}

export default Pokemon;
