import React, { useEffect, useState } from "react";
import { Grid, Button, Box } from "@mui/material";
import { useParams } from "react-router";
import { RootContext } from "./Home";

function PokemonDetail() {
  const { nama } = useParams();
  const [details, setDetails] = useState();
  
  useEffect(() => {
    const gqlQuery = `query pokemon($name: String!) {
      pokemon(name: $name) {
        id
        name
        abilities {
          ability {
            name
          }
        }
        moves {
          move {
            name
          }
        }
        types {
          type {
            name
          }
        }
        message
        status
      }
    }`;
    async function fetchdetails() {
      fetch('https://graphql-pokeapi.graphcdn.app/', {
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: gqlQuery,
          variables: {name: nama}
        }),
        method: 'POST',
      })
      .then((res) => res.json())
      .then((res) => setDetails(res.data.pokemon));  
    }
    fetchdetails();
  }, [nama]);
  
  
  if (!details) return <h3>Loading...</h3>;
  return (
<RootContext.Consumer>
      {
        value => {
          function catchpokemon(pokemon) {
            const random = Math.random() * 1;
            alert(Math.round(random) );
            if (Math.round(random) == 1){
              value.dispatch({type: "CATCH", pokemon: pokemon})
              alert("Pokemon catched");
            } else {
              alert("Pokemon is running away..");
            }
          }
          if (!value.state.myPokemon.length) return <h3>You don't have any pokemon...</h3>;
          return (
    <div>
      <h2 style={{textAlign: 'center'}}>{nama.toUpperCase()}</h2>
      <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            padding={1}>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`} width="100%" alt="" />
        </Grid>
        <Grid item lg={5} md={6} sm={12} xs={12}>
          <h5>Abilities</h5>
          {details.abilities.map((detail, i) => (
            <p key={i}>{detail.ability.name}</p>
          ))}
          <h5>Types</h5>
          {details.types.map((detail, i) => (
            <p key={i}>{detail.type.name}</p>
          ))}
          <h5>Abilities</h5>
          {details.moves.map((detail, i) => (
            <p key={i}>{detail.move.name}</p>
          ))}
        </Grid>
      </Grid>
      <Box textAlign='center' >
        <Button sx={{ width: '90%', marginBottom: 3}} variant='contained' onClick={() => catchpokemon({name: 'charmander', nickname: 'charmander 1', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'})}>
          Catch
        </Button>
      </Box>
    </div>
          )
        }
      }
</RootContext.Consumer>)
}

export default PokemonDetail;