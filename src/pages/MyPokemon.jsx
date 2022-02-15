import React, { useState } from "react";
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { RootContext } from "./Home";

function MyPokemon() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  function deletepokemon(getindex){
    setIndex(getindex);
    setOpen(true);
  }
  return (
    <RootContext.Consumer>
      {
        value => {
          if (!value.state.myPokemon.length) return <h3 style={{textAlign: "center"}}>You don't have any pokemon...</h3>;
          function fixdelete(){
            value.dispatch({type: "RELEASE", deleteID: index});
            setIndex();
            setOpen(false)
          }
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
                            <Button size="small" color="warning" onClick={()=> deletepokemon(i)}>
                              Release
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Warning!"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Are you sure want to release this pokemon?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button color="warning" onClick={fixdelete}>Yes</Button>
                      <Button color="warning" onClick={handleClose}>No</Button>
                    </DialogActions>
                  </Dialog>
              </Grid>
            </div>
          )
        }
      }
    </RootContext.Consumer>
  );
}

export default MyPokemon;