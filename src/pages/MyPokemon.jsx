import React from "react";
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";
import { RootContext } from "./Home";

function MyPokemon() {
  return (
    <RootContext.Consumer>
      {
        value => {
          if (!value.state.myPokemon.length) return <h3>You don't have any pokemon...</h3>;
          return (
            <div>
              <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    padding={1}>
                    {value.state.myPokemon.map((pokemon, i) => (
                      <Grid item key={i} lg={2} md={3} sm={4} xs={6}>
                        <Card>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              image={pokemon.image}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h6" component="div">
                                {pokemon.name}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {pokemon.nickname}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary" onClick={()=> value.dispatch({type: "RELEASE", deleteID: i})}>
                              Release
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
              </Grid>
            </div>
          )
        }
      }
    </RootContext.Consumer>
  );
}

export default MyPokemon;