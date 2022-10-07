import * as React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Login() {
  return (
    <Grid container justifyContent="center" sx={{ mt: 10 }}>
      <Card sx={{
        width: 330,
      }}>
        <CardContent sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography gutterBottom variant="h5" component="div">
            Вход
          </Typography>
          <TextField
            fullWidth
            label="Почта / имя пользователя"
            variant="standard"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Пароль"
            type="password"
            variant="standard"
            margin="normal"
          />
          <Button size="medium" sx={{ mt: 3 }}>Продолжить</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
