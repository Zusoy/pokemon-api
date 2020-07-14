import React, { useState, useEffect } from 'react';
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
import { fetchAllTrainers, fetchAllPokemons, fetchAllBoxes } from './services/fetchers';
import { TrainerList } from './components/trainer';



const App = () => {
  const [trainers, setTrainers] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [boxes, setBoxes] = useState([]);

  const [trainerId, setTrainerId] = useState(null);
  const [boxId, setBoxId] = useState(null);


  useEffect(() => {
    fetchAllTrainers().then(res => setTrainers(res));
    fetchAllPokemons().then(res => setPokemons(res));
    fetchAllBoxes().then(res => setBoxes(res));
  }, []);

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
                    <TrainerList  setTrainers={setTrainers} trainers={trainers} setTrainerId={setTrainerId} />
                  </Box>
                </Grid>
              </Box>
              <Box width={300}>
                <Grid item container justify="center">
                  <Box m={2}>
                    <h2>Box</h2>
                    <BoxList setBoxes={setBoxes} trainerId={trainerId} setBoxId={setBoxId} allBoxes={boxes} boxes={trainerId !== 0 ? boxes.filter(b => b.owner && b.owner.id === trainerId) : []} />
                  </Box>
                </Grid>
              </Box>
              <Box width={300}>
                <Grid item container justify="center">
                  <Box m={2}>
                    <h2>Pokémons</h2>
                    <PokemonList setPokemons={setPokemons} boxId={boxId} setPokemons={setPokemons} pokemons={boxId !== 0 ? pokemons.filter(p => p.box && p.box.id=== boxId) : []} />
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
