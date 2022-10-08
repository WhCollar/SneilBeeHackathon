import * as React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/user/actionsCreators";

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isLoginError = useSelector(state => state.user.error);
  const [error, setError] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = React.useCallback(() => {
    if (email.trim() && password.trim()) {
        dispatch(loginUser(email, password));
        if (isLoginError) {
          setError('Неверный логин или пароль');
        } else {
          setError('');
          navigate('/');
        }
    } else {
      setError('Поля не могут быть пустыми');
    }
  }, [dispatch, email, isLoginError, navigate, password]);

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
            label="Почта/имя пользователя"
            variant="standard"
            margin="normal"
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
          />
          <TextField
            fullWidth
            label="Пароль"
            type="password"
            variant="standard"
            margin="normal"
            onChange={(event) => {
              setPassword(event.target.value);
              setError('');
            }}
          />
          {error && <Typography variant="body1" color="error" sx={{ mt: 2 }}>{error}</Typography>}
          <Button size="medium" sx={{ mt: 3 }} onClick={handleSubmit} variant="contained">Продолжить</Button>
        </CardContent>
      </Card>
    </Grid>
  );
}
