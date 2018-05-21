import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokemons from './Pokemons';

class Main extends Component {


  render() {
    return (
      <main>
        <Switch>
          <Route path='/pokemons' component={Pokemons}/>
        </Switch>
      </main>
    )
  }
};

export default Main
