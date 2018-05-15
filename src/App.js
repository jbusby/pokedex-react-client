import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Header from './Header.js';
import Table from './Table.js';

class App extends Component {
  render() {
    const pokemons = [{"id":1,"identifier":"bulbasaur","species_id":1,"height":7,"weight":69,"base_experience":64,"order":1,"is_default":true,"created_at":"2018-05-10T21:51:21.444Z","updated_at":"2018-05-10T21:51:21.444Z"},{"id":2,"identifier":"ivysaur","species_id":2,"height":10,"weight":130,"base_experience":142,"order":2,"is_default":true,"created_at":"2018-05-10T21:51:21.450Z","updated_at":"2018-05-10T21:51:21.450Z"}];

    return (
      <div className="App">
        <Header />
        <Table pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
