import * as React from 'react';
import Grid from '@mui/material/Grid';
import NewsCard from '../NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadNewsFromServer } from '../../store/news/actionsCreators';

export default function News() {
  const news = useSelector(state => state.news.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadNewsFromServer());
  }, [dispatch]);

  return (
    <Grid container justifyContent="center" sx={{ mt: 10, flexDirection: 'column' }}>
      {news.map((newscard) => (
        <NewsCard key={newscard.id} newscard={newscard} />
      ))}
    </Grid>
  );
}
