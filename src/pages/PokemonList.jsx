import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  if (!pokemons.length) return <h3>Loading...</h3>;
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Pokemon List</h2>
      <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            padding={1}>
        {pokemons.map((pokemon) => (
          <Grid item key={pokemon.name} lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea component={Link} to={`/pokemon/${pokemon.name}`} >
                <CardMedia
                  component="img"
                  image={pokemon.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {pokemon.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
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

export default PokemonList;