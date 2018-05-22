import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import Pokemon from './Pokemon';

class Pokemons extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/pokemons' component={PokemonsList}/>
          <Route path='/pokemons/:id' component={Pokemon}/>
        </Switch>
      </main>
    )
  }
};

export default Pokemons
