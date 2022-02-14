import React from "react";
import { Grid, Button, Box } from "@mui/material";

class PokemonDetail extends React.Component {
  render() {
    return (
      <div>
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              padding={1}>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <h2>Nama Pokemon</h2>
            <img src="https://dummyimage.com/600x400/000/fff" width="100%" alt="" />
          </Grid>
          <Grid item lg={5} md={6} sm={12} xs={12}>
            <p>keterangan 1</p>
            <p>keterangan 2</p>
            <p>keterangan 3</p>
            <p>keterangan 4</p>
            <p>keterangan 5</p>
          </Grid>
        </Grid>
        <Box textAlign='center' >
          <Button sx={{ width: '90%', marginBottom: 3}}variant='contained'>
            Catch
          </Button>
        </Box>
      </div>
    );
  }
}

export default PokemonDetail;