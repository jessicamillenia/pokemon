import React, { createContext, Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import MyPokemon from "../pages/MyPokemon";
import PokemonList from "../pages/PokemonList";
import PokemonDetail from "../pages/PokemonDetail";
import MyAppBar from "../pages/MyAppBar";

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
  state = {
    myPokemon: [{name: 'charmander', nickname: 'charmander 1', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'}],
  }
  dispatch = (action) => {
    if(action.type === "RELEASE"){
      const newPokemon = this.state.myPokemon;
      newPokemon.pop(action.deleteID)
      return this.setState({
        myPokemon: newPokemon,
      })
    }
    if(action.type === "CATCH"){
      const newPokemon = this.state.myPokemon;
      newPokemon.push(action.pokemon)
      return this.setState({
        myPokemon: newPokemon,
      })
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.value !== prevState.value) {
  //     localStorage.setItem("myPokemon", this.state.value)
  //   }
  // }
  
  render() {
    return (
      // localStorage.setItem("myPokemon", [{name: 'charmander', nickname: 'charmander 1', pokemonID: 4}])
      <Router>
        <Provider value={{
          state: this.state,
          dispatch: this.dispatch
        }}>
          <Fragment>
            <MyAppBar/>
            <Routes>
              <Route path="/" exact element={<PokemonList/>} />
              <Route path="/mypokemon" exact element={<MyPokemon/>} />
              <Route path="/pokemon/:nama" exact element={<PokemonDetail/>} />
            </Routes>
          </Fragment>
        </Provider>
      </Router>
    );
  }
}

export default Home;