import React from 'react';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as pages from './pages'

function App() {
  
  return (<Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/add-trainer">Ajouter un dresseur</Link>
          </li>
          <li>
            <Link to="/add-pokemon">Ajouter Pokemon</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <pages.Home />
        </Route>
        <Route path="/add-pokemon">
          <pages.AddPokemon />
        </Route>
        <Route path="/add-trainer">
          <pages.AddTrainer />
        </Route>
      </Switch>
    </div>
  </Router>)
}
export default App;
