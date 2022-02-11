import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom";

import MyPokemon from "../pages/MyPokemon";
import PokemonList from "../pages/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";


export const RootContext = React.createContext();
class Home extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mypokemon">My Pokemon</Link>
              </li>
              <li>
                <Link to="/pokemondetails">Detail</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<PokemonList/>} />
            <Route path="/mypokemon" element={<MyPokemon/>} />
            <Route path="/pokemondetail" element={<PokemonDetail/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Home;