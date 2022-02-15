import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RootContext } from "./Home";

function PokemonList() {
  
  const [pokemons, setPokemons] = useState([]);
  
  useEffect(() => {
    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
          url
          name
          image
        }
      }
    }`;
    async function fetchPokemons() {
      fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: gqlQuery,
        }),
        method: 'POST',
      })
      .then((res) => res.json())
      .then((res) => setPokemons(res.data.pokemons.results));  
    }
    fetchPokemons();
  }, []);

  if (!pokemons.length) return <h3 style={{textAlign: "center"}}>Loading...</h3>;
  return (
    <RootContext.Consumer>
      {
        value => {
          function countpokemon(name){
            let count = 0;
            value.state.myPokemon.forEach((mypoke) => {
              if (mypoke.name === name){
                count += 1;
              } 
            })
            return (<span>{count}</span>)
          }
          return (
            <div>
              <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    padding={1}>
                {pokemons.map((pokemon) => (
                  <Grid item key={pokemon.name} lg={2} md={3} sm={4} xs={6}>
                    <Card>
                      <CardActionArea component={Link} to={`/pokemon/${pokemon.name}`} >
                        <CardMedia
                          component="img"
                          image={pokemon.image}
                        />
                        <CardContent sx={{textAlign: 'center'}}>
                          <Typography gutterBottom variant="h6" component="div">
                            {pokemon.name.toUpperCase()}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Owned Total : {countpokemon(pokemon.name)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          );
        }
      }
    </RootContext.Consumer>
  )
}

export default PokemonList;