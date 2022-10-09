import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShopCards({ item }) {
  return (
    <Card sx={{ width: 220, margin: 2, position: 'relative' }}>
      <CardMedia
        component="img"
        alt=""
        height="200"
        image={`https://0c52-45-10-42-113.eu.ngrok.io/marketplace/${item.imagePath}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {item.description.length > 30 ? item.description.substr(0, 29) + '...' : item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant={item.isActive ? 'contained' : 'disabled'} sx={{ width: '100%', position: 'absolute', bottom: 0, left: 0, borderRadius: 0 }}>{item.price} ВТБ coin</Button>
      </CardActions>
    </Card>
  );
}
