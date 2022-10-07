import * as React from 'react';
import Grid from '@mui/material/Grid';
import ShopCard from '../ShopCard';

const array = [
  { id: 1, img: 'https://i.pinimg.com/564x/64/d0/f6/64d0f6d9e0012b743e452bf51dcb518f.jpg', title: 'Lizard', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
  { id: 1, img: 'https://i.pinimg.com/564x/64/d0/f6/64d0f6d9e0012b743e452bf51dcb518f.jpg', title: 'Lizard', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
  { id: 1, img: 'https://i.pinimg.com/564x/64/d0/f6/64d0f6d9e0012b743e452bf51dcb518f.jpg', title: 'Lizard', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
  { id: 1, img: 'https://i.pinimg.com/564x/64/d0/f6/64d0f6d9e0012b743e452bf51dcb518f.jpg', title: 'Lizard', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
  { id: 1, img: 'https://i.pinimg.com/564x/64/d0/f6/64d0f6d9e0012b743e452bf51dcb518f.jpg', title: 'Lizard', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
  { id: 1, img: 'https://i.pinimg.com/564x/64/d0/f6/64d0f6d9e0012b743e452bf51dcb518f.jpg', title: 'Lizard', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
];

export default function Shop() {
  return (
    <Grid container justifyContent="center" sx={{ mt: 10 }}>
      {array.map((item) => (
        <ShopCard key={item.id} item={item} />
      ))}
    </Grid>
  );
}
