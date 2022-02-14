import React from "react";
import { Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography } from "@mui/material";

class MyPokemon extends React.Component {
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
                    Nickname
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Release
                </Button>
              </CardActions>
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
                    Nickname
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Release
                </Button>
              </CardActions>
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
                    Nickname
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Release
                </Button>
              </CardActions>
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
                    Nickname
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Release
                </Button>
              </CardActions>
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
                    Nickname
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Release
                </Button>
              </CardActions>
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
                    Nickname
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Release
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MyPokemon;