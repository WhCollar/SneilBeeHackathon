import * as React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registrationUser } from "../../store/user/actionsCreators";

export default function Registration() {
  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');

  const [error, setError] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (firstName.trim() && secondName.trim() && email.trim() && userName.trim() && password.trim() && repeatPassword.trim()) {
      if (password.trim() === repeatPassword.trim()) {
        dispatch(registrationUser(firstName, secondName, userName, email, password));
        navigate('/login');
      } else {
        setError('Пароли не совпадают');
      }
    } else {
      setError('Поля не могут быть пустыми');
    }
  };

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
            Регистрация
          </Typography>
          <TextField
            fullWidth
            label="Имя"
            variant="standard"
            margin="normal"
            onChange={(event) => {
              setFirstName(event.target.value);
              setError('');
            }}
          />
          <TextField
            fullWidth
            label="Фамилия"
            variant="standard"
            margin="normal"
            onChange={(event) => {
              setSecondName(event.target.value);
              setError('');
            }}
          />
          <TextField
            fullWidth
            label="Почта"
            variant="standard"
            type="email"
            margin="normal"
            onChange={(event) => {
              setEmail(event.target.value);
              setError('');
            }}
          />
          <TextField
            fullWidth
            label="Имя пользователя"
            variant="standard"
            margin="normal"
            onChange={(event) => {
              setUserName(event.target.value);
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
          <TextField
            fullWidth
            label="Повторите пароль"
            type="password"
            variant="standard"
            margin="normal"
            onChange={(event) => {
              setRepeatPassword(event.target.value);
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
