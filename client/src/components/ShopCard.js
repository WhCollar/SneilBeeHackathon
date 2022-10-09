import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShopCards({ item }) {
  return (
    <Card sx={{ maxWidth: 240, margin: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">10 монет</Button>
        {/* <Button size="small">Подробнее</Button> */}
      </CardActions>
    </Card>
  );
}
