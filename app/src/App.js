import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as pages from './pages'
import { Grid, Box } from '@material-ui/core';
import { BoxList } from './components/box';
import { PokemonList } from './components/pokemon';

const App = () => {
  const [trainers, setTrainers] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [boxes, setBoxes] = useState([]);

  fetchAllTrainers().then(res => setTrainers(res));
  fetchAllPokemons().then(res => setPokemons(res));
  fetchAllBoxes().then(res => setBoxes(res));

  let trainerId = 0
  let pokemonId = 0
  let boxId = 0

  return (
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
                  <Box m={2}>
                    <h2>Tous les dresseurs</h2>
                    <TrainerList trainers={trainers} />
                  </Box>
                </Grid>
              </Box>
              <Box width={300}>
                <Grid item container justify="center">
                  <Box m={2}>
                    <h2>Box</h2>
                    <BoxList boxes={trainerId != 0 ? boxes.filter(b => b.owner == trainerId) : []} />
                  </Box>
                </Grid>
              </Box>
              <Box width={300}>
                <Grid item container justify="center">
                  <Box m={2}>
                    <h2>Pokémons</h2>
                    <PokemonList pokemons={boxId != 0 ? pokemons.filter(p => p.box == boxId) : []} />
                  </Box>
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
    </Router>)
}

export default App;
