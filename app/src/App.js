import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as pages from './pages'

const App = () =>
    <Router>
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
  </Router>

export default App;
