import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as pages from './pages'
import { Grid, Box } from '@material-ui/core';

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
            <Link to="/boxes">Voir la listes des boxes</Link>
          </li>
          <li>
            <Link to="/pokemons">Voir la listes des Pokemons</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Grid container xs={12} spacing={0}>
            <Box width={300}>
              <Grid container item justify="center">
                <pages.ListHuman />
              </Grid>
            </Box>
            <Box width={300}>
              <Grid item container justify="center">
                <pages.ListBox />
              </Grid>
            </Box>
            <Box width={300}>
              <Grid item container justify="center">
                <pages.ListPokemon />
              </Grid>
            </Box>
          </Grid>
        </Route>
        <Route path="/pokemons">
          <pages.ListPokemon />
        </Route>
        <Route path="/humans">
          <pages.ListHuman />
        </Route>
        <Route path="/boxes">
          <pages.ListBox />
        </Route>
      </Switch>
    </div>
  </Router>

export default App;
