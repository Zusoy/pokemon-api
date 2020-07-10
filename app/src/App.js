import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as pages from './pages'
import { Grid } from '@material-ui/core';

const App = () =>
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/humans">Voir la listes des dresseurs</Link>
          </li>
          <li>
            <Link to="/pokemons">Voir la listes des Pokemons</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <pages.Home />
        </Route>
        <Route path="/pokemons">
          <pages.ListPokemon />
        </Route>
        <Route path="/humans">
          <Grid container xs={12} spacing={0}>
            <Grid container item xs={2} justify="center">
              <pages.ListHuman />
            </Grid>
            <Grid item container xs={2} justify="center">
              <pages.ListHuman />
            </Grid>
            <Grid item container xs={2} justify="center">
              <pages.ListHuman />
            </Grid>
          </Grid>

        </Route>
      </Switch>
    </div>
  </Router>

export default App;
