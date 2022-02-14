import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import React from "react";

class PokemonList extends React.Component {
  render() {
    return (
      <div>
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              padding={1}>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://dummyimage.com/600x400/000/fff"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Nama Pokemon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://dummyimage.com/600x400/000/fff"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Nama Pokemon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://dummyimage.com/600x400/000/fff"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Nama Pokemon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://dummyimage.com/600x400/000/fff"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Nama Pokemon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://dummyimage.com/600x400/000/fff"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Nama Pokemon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="https://dummyimage.com/600x400/000/fff"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Nama Pokemon
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Owned Total : 10
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PokemonList;