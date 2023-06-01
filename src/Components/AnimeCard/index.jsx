import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function AnimeCard({titulo, descricao, urlImagem}) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#0f0f0f'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={urlImagem}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color ="#F5F5F5">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}