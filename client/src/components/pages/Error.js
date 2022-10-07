import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" sx={{ mt: 10 }}>
      <Card sx={{ maxWidth: 500, bgcolor: '#F5F5F5' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Произошла ошибка
          </Typography>
          <Typography variant="body1" color="text.secondary">
            К сожалению произошла непредвиденная ошибка. Попробуйте вернуться назад или перейти на главную страницу.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={() => navigate(-1)}>Назад</Button>
          <Button size="medium" onClick={() => navigate('/')}>Домой</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
