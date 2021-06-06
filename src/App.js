import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Pokedex from './componentes/pokedex';

class App extends Component {

  render()
  {
    return (
      <div>
        <Switch>
          <Route path="/" exact={true} component={Pokedex} />
        </Switch>
      </div>
    );
  }

}

export default App;