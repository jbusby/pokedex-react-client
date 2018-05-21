import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Header from './Header.js';
import Table from './Table.js';

class App extends Component {
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

    return (
      <div className="App">
        <Header />
        <Table pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
