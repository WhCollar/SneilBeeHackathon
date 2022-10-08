import * as React from 'react';
import Grid from '@mui/material/Grid';
import NewsCard from '../NewsCard';

export default function News() {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <Grid container justifyContent="center" sx={{ mt: 10, flexDirection: 'column' }}>
      {array.map((newscard, idx) => (
        <NewsCard key={idx} />
      ))}
    </Grid>
  );
}
