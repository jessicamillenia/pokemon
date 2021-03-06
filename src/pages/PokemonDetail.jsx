import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from "@mui/material";
import { useParams } from "react-router";
import { RootContext } from "./Home";

function PokemonDetail() {
  const { nama } = useParams();
  const [details, setDetails] = useState();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [nickname, setNickname] = useState('');

  const handleClickOpen = () => {
    const random = Math.random()<0.5 ? 0 : 1;
    if (Math.round(random) === 1){
      setOpen(true);
    } else {
      setOpen2(true);
    }
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

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
  
  
  if (!details) return <h3 style={{textAlign: "center"}}>Loading...</h3>;
  return (
    <RootContext.Consumer>
      {
        value => {
          function catchpokemon() {
            let isSame = false
            value.state.myPokemon.forEach((mypoke) => {
              if (mypoke.nickname === nickname){
                isSame = true;
              } 
            })
            if (isSame === false){
              value.dispatch({type: "CATCH", pokemon: {name: details.name, image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`, nickname:nickname}});
              setNickname("");
              setOpen(false);
              setOpen3(true);
            } else {
              setOpen4(true);
            }
          }
          return (
            <div>
              <h2 style={{textAlign: 'center'}}>{nama.toUpperCase()}</h2>
              <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    padding={3}>
                <Grid item lg={5} md={6} sm={12} xs={12}>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`} width="100%" alt="" />
                </Grid>
                <Grid item lg={5} md={6} sm={12} xs={12}>
                  <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={1}
                      padding={3}>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <h5>Abilities</h5>
                      {details.abilities.map((detail, i) => {
                        if (i+1===details.abilities.length){
                          return <span key={i} >{detail.ability.name}. </span>
                        } else {
                          return <span key={i} >{detail.ability.name}, </span>
                        }
                      })}
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <h5>Types</h5>
                      {details.types.map((detail, i) => {
                        if (i+1===details.types.length){
                          return <span key={i} >{detail.type.name}. </span>
                        } else {
                          return <span key={i} >{detail.type.name}, </span>
                        }
                      })}
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <h5>Abilities</h5>
                      <div style={{textAlign: 'justify'}}>
                      {details.moves.map((detail, i) => {
                        if (i+1===details.moves.length){
                          return <span key={i} >{detail.move.name}. </span>
                        } else {
                          return <span key={i} >{detail.move.name}, </span>
                        }
                      })}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Box textAlign='center' >
                <Button color='warning' sx={{ width: '90%', marginBottom: 3}} variant='contained' onClick={handleClickOpen}>
                  Catch
                </Button>
              </Box>
              <Dialog open={open}>
                <DialogTitle>You catch a pokemon!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Please give a nickname to your pokemon!
                    </DialogContentText>
                    <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="nickname"
                    label="Nickname"
                    fullWidth
                    variant="standard"
                    color="warning"
                    value={nickname}
                    onChange={(event) => {setNickname(event.target.value)}} 
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="warning" onClick={catchpokemon}>Catch</Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={open2}
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Failed to catch :("}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Pokemon is running away...
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button color="warning" onClick={handleClose2}>OK</Button>
                </DialogActions>
              </Dialog>
              <Dialog
                open={open3}
                onClose={handleClose3}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Congratulations!"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You've caught the pokemon!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button color="warning" onClick={handleClose3}>OK</Button>
                </DialogActions>
              </Dialog>              
              <Dialog
                open={open4}
                onClose={handleClose4}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Oops!"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    You have other pokemon with this nickname!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button color="warning" onClick={handleClose4}>OK</Button>
                </DialogActions>
              </Dialog>
            </div>
          )
        }
      }
    </RootContext.Consumer>
  )
}

export default PokemonDetail;